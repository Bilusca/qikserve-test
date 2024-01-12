import { HtmlHTMLAttributes } from "react";
import { MenuTypesItem } from "./MenuTypeItem";

export function MenuTypes({ children }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex gap-3 w-full mb-6">
      {children}
    </div>
  )
}

MenuTypes.Item = MenuTypesItem