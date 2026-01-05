import { Card, CardContent } from './card';
import CardHeaderContent from './display/CardHeader';

export function GoalProgress() {
  return (
    <Card className="col-span-3">
      <CardHeaderContent
        title="Orders Goal"
        description="Summary of today's and total orders"
      />
      <CardContent>
        <div className="flex flex-col space-y-8">
          {/* <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Progress</div>
              <div className="text-sm font-medium">
                {data?.monthlyProgress}%
              </div>
            </div>
            <Progress value={data?.monthlyProgress} className="h-2" />
          </div> */}
          <div className="grid gap-4">
            <div className="flex items-center justify-between border-b border-b-gray-300 pb-2">
              <div className="text-sm font-medium">Today</div>
              {/* <div className="font-bold">{data?.today || 0}</div> */}
              <div className="font-bold">0</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Total</div>
              <div className="font-bold">
                {/* ${(+data?.monthlyGoal - +data?.totalDonations).toLocaleString()} */}
                0
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
