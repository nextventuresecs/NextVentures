interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="text-center p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
        {value}
      </div>
      <div className="text-primary-foreground/80 text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
