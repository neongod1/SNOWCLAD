// ⚠️ 临时设计系统预览页 — 用于阶段 3.1 验收，3.4 会被正式首页替换
import SnowcladLogo from "@/components/logo";

const swatches = [
  { name: "Primary · Glacier", hex: "#0A3B5C", cls: "bg-primary", light: false },
  { name: "Primary Deep", hex: "#06283F", cls: "bg-primary-deep", light: false },
  { name: "Ice · Secondary", hex: "#1F7A9E", cls: "bg-ice", light: false },
  { name: "Arctic · Accent", hex: "#25A0C5", cls: "bg-arctic", light: false },
  { name: "Snow · Background", hex: "#F6FAFC", cls: "bg-snow border border-frost", light: true },
  { name: "Ink · Text", hex: "#132A3A", cls: "bg-ink", light: false },
  { name: "Mist · Muted", hex: "#61788A", cls: "bg-mist", light: false },
  { name: "Frost · Border", hex: "#DBE7EF", cls: "bg-frost", light: true },
  { name: "Frost Tint", hex: "#EDF4F8", cls: "bg-frost-tint border border-frost", light: true },
];

export default function DesignSystemPreview() {
  return (
    <main className="container-page py-16">
      <div className="mb-14 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <SnowcladLogo className="h-9 w-auto text-primary" />
          <span className="rounded-full bg-arctic px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Design System
          </span>
        </div>
        <div>
          <h1 className="font-display text-5xl font-semibold tracking-tight">
            Stainless Steel, Perfected.
          </h1>
          <p className="mt-3 max-w-xl text-lg text-mist">
            Design tokens live in{" "}
            <code className="rounded bg-frost-tint px-1.5 py-0.5 text-sm">globals.css @theme</code>.
            Fonts load via <code className="rounded bg-frost-tint px-1.5 py-0.5 text-sm">next/font</code>.
          </p>
        </div>
      </div>

      {/* 颜色 */}
      <section className="mb-14">
        <h2 className="mb-4 font-display text-2xl font-semibold">Color Tokens</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {swatches.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-2xl border border-frost">
              <div className={`flex h-24 items-end p-3 ${c.cls}`}>
                <span className={`text-xs font-medium ${c.light ? "text-ink" : "text-white"}`}>
                  {c.hex}
                </span>
              </div>
              <div className="bg-surface px-3 py-2 text-sm font-medium">{c.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 排版 */}
      <section className="mb-14">
        <h2 className="mb-4 font-display text-2xl font-semibold">Typography</h2>
        <div className="space-y-4 rounded-2xl border border-frost bg-surface p-8">
          <p className="text-sm uppercase tracking-widest text-mist">Display · Space Grotesk</p>
          <h1 className="font-display text-5xl font-semibold">Heading One</h1>
          <h2 className="font-display text-3xl font-semibold">Heading Two</h2>
          <h3 className="font-display text-xl font-semibold">Heading Three</h3>
          <p className="text-sm uppercase tracking-widest text-mist">Body · Inter</p>
          <p className="max-w-xl text-base text-ink">
            Body text reads in Inter for maximum legibility across desktop and mobile.
          </p>
          <p className="max-w-xl text-sm text-mist">
            Muted secondary text uses the slate tone for hierarchy.
          </p>
        </div>
      </section>

      {/* 按钮 */}
      <section className="mb-14">
        <h2 className="mb-4 font-display text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-frost bg-surface p-8">
          <a className="btn btn-primary" href="#">
            Shop on Amazon
          </a>
          <a className="btn btn-accent" href="#">
            Shop Bestsellers
          </a>
          <a className="btn btn-outline" href="#">
            Explore Technology
          </a>
          <div className="w-full rounded-xl bg-primary-deep p-4">
            <a className="btn btn-white" href="#">
              On Dark · White Button
            </a>
          </div>
        </div>
      </section>

      {/* Logo 自适应 */}
      <section>
        <h2 className="mb-4 font-display text-2xl font-semibold">Logo · currentColor</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex h-28 items-center justify-center rounded-2xl border border-frost bg-surface">
            <SnowcladLogo className="h-8 w-auto text-primary" />
          </div>
          <div className="flex h-28 items-center justify-center rounded-2xl bg-primary-deep">
            <SnowcladLogo className="h-8 w-auto text-white" />
          </div>
          <div className="flex h-28 items-center justify-center rounded-2xl bg-arctic">
            <SnowcladLogo className="h-8 w-auto text-white" />
          </div>
        </div>
      </section>
    </main>
  );
}
