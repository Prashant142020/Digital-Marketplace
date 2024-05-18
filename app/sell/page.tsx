import { SelectCategory } from '@/components/SelectCategory';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function SellRoute() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your product</CardTitle>
            <CardDescription>
              Please decribe your product and set a price
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type="text" placeholder=" Name of the product" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label> Category</Label>
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label> Price</Label>
              <Input type="number" placeholder=" $40" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label> Small Summary</Label>
              <Textarea placeholder=" Please decribe your product shortly right here" />
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
export default SellRoute;
