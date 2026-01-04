import { LucideIcon } from "lucide-react";

interface IndustryChipProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

const IndustryChip = ({ icon: Icon, label, delay = 0 }: IndustryChipProps) => {
  return (
    <div 
      className="inline-flex items-center gap-3 px-5 py-3 bg-card rounded-full shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <span className="font-medium text-foreground text-sm">{label}</span>
    </div>
  );
};

export default IndustryChip;
