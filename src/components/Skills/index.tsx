import type { ReactElement } from "react";

export function SkillItem({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={icon} alt="design icon" width="40" />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>

        <p className="service-item-text">{text}</p>
      </div>
    </li>
  );
}

export function SkillList({
  children,
}: {
  children?: ReactElement<typeof SkillItem>[] | ReactElement<typeof SkillItem>;
}) {
  return <ul className="service-list">{children}</ul>;
}
