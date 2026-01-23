import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center mt-30 gap-4">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("size-8 animate-spin", className)}
        {...props}
      />
      <p className="font-bold text-lg leading-7 tracking-tight text-neutral-950">
        Loading...
      </p>
    </div>
  );
}

export { Spinner };
