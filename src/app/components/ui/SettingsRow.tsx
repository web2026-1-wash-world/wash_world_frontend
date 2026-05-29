import { LuChevronRight } from "react-icons/lu";

type SettingsRowProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

export function SettingsRow({ icon, title, subtitle }: SettingsRowProps) {
  return (
    <div className="flex items-center gap-4 rounded-card bg-tranparent px-4 py-3">
      <div className="flex size-12 items-center justify-center rounded-plan bg-surface text-black text-xl">
        {icon}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="text-text-white font-light">{title}</p>
        <small className="text-text-secondary normal-case">{subtitle}</small>
      </div>
      <LuChevronRight className="shrink-0 text-text-muted size-5" />
    </div>
  );
}
