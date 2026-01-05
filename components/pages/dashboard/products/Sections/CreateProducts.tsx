/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from '@/lib/toast';
import Image from 'next/image';
import ErrorFetching from '@/components/molecules/ErrorFetching';
import Loading from '@/components/atoms/Loading';
import useAPI from '@/Hooks/useAPI';
import SettingsTab from '@/components/molecules/SettingsTab';
import { API_URL } from '@/config/api';
import { CreateProductsFields } from '@/config/forms/products.forms';
import Button from '@/components/atoms/Button';
import ButtonLoading from '@/components/atoms/ButtonLoading';
import Input from '@/components/atoms/Input';
import { useUpdateContent } from '@/context/updateContentContext';
import { InputTypes } from '@/utils/types';
import AttachmentsUploader from '@/components/molecules/AttachmentsPreview';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  trade_mark: string;
  price: number;
  old_price?: number;
  discount?: number;
  image?: string;
  gallery?: string;
  size?: string[];
}

// ----------------------------------------------------------------

const CreateProducts = ({
  value,
  editId,
  onEditIdChange,
  onTabChange,
}: {
  value: string;
  editId: string | number | null;
  onEditIdChange: (id: string | number | null) => void;
  onTabChange: (val: string) => void;
}) => {
  const [attachments, setAttachments] = useState<File[]>([]);

  const { showToast } = useToast();
  const { triggerRefresh } = useUpdateContent();
  const refreshKey = 'products';

  // -----------------------------------------

  const createSchema = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    trade_mark: yup.string().required('Trade Mark is required'),
    price: yup
      .number()
      .typeError('Price must be a number')
      .required('Price is required'),
    old_price: yup.number().typeError('Old Price must be a number').nullable(),
    discount: yup.number().typeError('Discount must be a number').nullable(),
    size: yup
      .array()
      .of(yup.string().required())
      .min(1, 'Please select at least one size')
      .required('Size is required')
      .defined(),
    image: yup
      .mixed<FileList>()
      .test('required', 'Image is required', function (value) {
        return (
          editId !== null || (value instanceof FileList && value.length > 0)
        );
      }),
    gallery: yup
      .array()
      .of(yup.mixed<File>().required())
      .nullable()
      .default(null),
  });

  type ProductFormData = yup.InferType<typeof createSchema>;

  // API
  const { isLoading, error, getSingle, add, edit } = useAPI<ProductCardProps>(
    `${API_URL}/clothes`
  );

  // ----------------------------------------------------------------

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<any, any>({
    resolver: yupResolver(createSchema),
  });

  useEffect(() => {
    setValue('gallery', attachments);
  }, [attachments]);

  // ----------------------------------------------------------------

  const onSubmit: SubmitHandler<ProductFormData> = async (data: any) => {
    console.log(data);
    try {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('trade_mark', data.trade_mark);
      formData.append('price', data.price);
      if (data.old_price) formData.append('old_price', data.old_price);
      if (data.discount) formData.append('discount', data.discount);

      if (data.image && data.image[0]) {
        formData.append('image', data.image[0]);
      } else if (!data.image && editId !== null) {
        formData.append('image', null as any);
      }

      (data.gallery || attachments).forEach((file: any) => {
        if (file) formData.append('gallery[]', file);
      });

      let response: any | undefined;

      if (editId !== null) {
        response = await edit(editId, formData);
        // showToast('Product updated successfully');
      } else {
        response = await add(formData);
        // showToast('Product created successfully');
      }

      if (response) {
        showToast(response?.message);
        reset({
          title: response.title ?? '',
          description: response.description ?? '',
          trade_mark: response.trade_mark ?? '',
          price: response.price,
          old_price: response.old_price,
          discount: response.discount,
          size: response.size,
        });
        triggerRefresh(refreshKey);
        onTabChange('allProducts');
        onEditIdChange(null);
      }
    } catch (error) {
      const apiError = (error as any)?.response?.message;
      showToast(apiError, 'error');
    }
  };

  // ----------------------------------------------------------------

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    if (editId !== null) {
      (async () => {
        try {
          const res = await getSingle(editId);
          if (res) {
            reset({
              title: res.title ?? '',
              description: res.description ?? '',
              trade_mark: res.trade_mark ?? '',
              price: res.price,
              old_price: res.old_price,
              discount: res.discount,
              size: res.size,
            });
            if (isActive) {
              setImagePreview(
                res.image ? `/assets/products/${res.image}.jpg` : null
              );
            }
          }
        } catch (error) {
          console.error('فشل في جلب بيانات القسم:', error);
          showToast((error as any)?.response?.message, 'error');
        }
      })();
    }
    return () => {
      isActive = false; // يمنع setState إذا تغير editId أو unmount
    };
  }, [editId, getSingle, reset, showToast]);

  // ----------------------------------------------------------------

  return (
    <SettingsTab
      value={value}
      title="Create Product"
      description="Create New Product for your store"
    >
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <ErrorFetching error={error} />
        ) : (
          <>
            <div className="grid gap-5 md:grid-cols-2 mb-5">
              {CreateProductsFields.map(
                ({ id, label, name, placeholder, type, options }) => {
                  const isMultiSelect = ['size'].includes(name);
                  return name === 'gallery' ? (
                    <AttachmentsUploader
                      key={id}
                      attachments={attachments}
                      setAttachments={setAttachments}
                    />
                  ) : (
                    <Input
                      key={id}
                      inputName={name}
                      type={type as InputTypes}
                      label={label}
                      placeholder={placeholder}
                      register={register}
                      options={options}
                      otherClassName="w-full"
                      control={control}
                      isMulti={isMultiSelect}
                      error={
                        errors[name as keyof ProductFormData] as
                          | FieldError
                          | undefined
                      }
                      {...(type === 'file' ? { accept: 'image/*' } : {})}
                    />
                  );
                }
              )}
            </div>

            {imagePreview && (
              <div className="mb-3">
                {isLoading ? (
                  <Loading />
                ) : (
                  <Image
                    src={imagePreview}
                    alt="Image Preview"
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover"
                  />
                )}
              </div>
            )}
            <Button type="submit">
              {isLoading ? <ButtonLoading /> : 'Save Changes'}
            </Button>
          </>
        )}
      </form>
    </SettingsTab>
  );
};

export default CreateProducts;
