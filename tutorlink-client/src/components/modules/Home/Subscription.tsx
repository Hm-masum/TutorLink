import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "./Subscription.module.css";

const Subscription = () => {
  return (
    <div className="my-10 rounded-lg">
      <div
        className={`${styles.subscription} h-[60vh] md:h-[70vh] text-white flex flex-col md:flex-row gap-5 justify-center items-center rounded-lg p-8`}
      >
        <div className="space-y-4 w-full md:w-2/3">
          <h2 className="text-2xl md:text-5xl font-semibold">
            Stay Ahead with Exclusive Learning <span className="">Offers</span>
          </h2>
          <p className="text-gray-300 md:w-[70%]">
            Unlock unbeatable tutoring offers, limited-time discounts, and
            premium content – only for subscribers!
          </p>
          <div className="flex w-full max-w-sm items-center">
            <Input
              className="h-10 rounded-full border-gray-600 border-r-0"
              type="email"
              placeholder="Email"
            />
            <Button
              className="bg-purple-700 h-10 rounded-full -ml-10"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/3"></div>
      </div>
    </div>
  );
};

export default Subscription;
