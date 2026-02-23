import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { IconUpload } from '@tabler/icons-react';
import { useDropzone } from 'react-dropzone';
import { ImagePlus } from 'lucide-react';

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

export const FileUpload = ({
  onChange,
}: {
  onChange: (files: File[]) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const selectedFile = newFiles[0] ?? null;
    setFile(selectedFile);
    if (onChange) {
      onChange(selectedFile ? [selectedFile] : []);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => console.log(error),
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        className="group/file block cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full">
            {file ? (
              <motion.div
                layoutId="file-upload"
                className={cn(
                  'relative overflow-hidden border border-[var(--seven-color)] z-40 bg-white flex flex-col items-start justify-start md:h-24 p-4 w-full rounded-md',
                  'shadow-sm',
                )}
              >
                <div className="flex justify-between w-full items-center gap-4">
                  <p className="text-base text-neutral-700 truncate max-w-xs">
                    {file.name}
                  </p>
                  <p className="rounded-lg px-2 py-1 w-fit shrink-0 text-sm text-neutral-600 shadow-input">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600">
                  <p className="px-1 py-0.5 rounded-md bg-gray-100">
                    {file.type}
                  </p>
                  <p>
                    modified {new Date(file.lastModified).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={cn(
                  'relative z-40 bg-white border border-dashed border-[var(--seven-color)] dark:bg-neutral-900 flex items-center justify-center h-12 w-full',
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-neutral-600 flex flex-col items-center"
                  >
                    Drop it
                    <IconUpload className="h-4 w-4 text-neutral-600" />
                  </motion.p>
                ) : (
                  <div className="flex flex-cols items-center justify-center gap-3">
                    <ImagePlus size={24} />
                    <div className="text-(--text-secondary) space-y-2">
                      <p className="font-medium">Main image</p>
                      {/* <p className="text-sm">PNG, JPG (maximum 5 MB)</p> */}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
