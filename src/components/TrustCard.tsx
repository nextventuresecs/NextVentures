import { Check, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustCardProps {
  title: string;
  description: string;
  delay?: number;
  Icon?: LucideIcon;
  className?: string;
}

const TrustCard = ({
  title,
  description,
  delay = 0,
  Icon = Check,
  className,
}: TrustCardProps) => {
  return (
    <div
      className={cn(
        "flex gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-foreground mb-1">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TrustCard;