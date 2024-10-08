import * as React from "react";

import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-20 w-full rounded-md border border-white/10 font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 focus:ring-2 focus:ring-accent focus-visible:ring-2 focus-within:ring-2 outline-none resize-none disabled:opacity-50 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
