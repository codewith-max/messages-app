import Link from 'next/link';
import { businessNav, businessNavMenus } from '../../../content/forBusinessContent';
import { NavIcon } from './BusinessNavIcons';

function MenuCaret() {
  return (
    <div
      className="absolute -top-2 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-black/[0.07] bg-white shadow-[-2px_-2px_4px_rgba(0,0,0,0.04)]"
      aria-hidden
    />
  );
}

function DropdownShell({ children, align = 'center', wide = false }) {
  const alignCls =
    align === 'left' ? 'left-0 translate-x-0' : align === 'right' ? 'right-0 left-auto translate-x-0' : 'left-1/2 -translate-x-1/2';
  return (
    <div
      className={`invisible absolute top-full z-[100] pt-3 opacity-0 transition duration-150 ease-out pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto max-lg:hidden ${alignCls} ${wide ? 'w-max min-w-0' : ''}`}
    >
      <div className="relative">
        <MenuCaret />
        <div
          className={`relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.14)] ${wide ? '' : 'min-w-[260px]'}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ProductsMenu() {
  const data = businessNavMenus.products;
  return (
    <DropdownShell align="center" wide>
      <div className="p-2">
        <p className="px-4 pb-2 pt-3 text-[15px] font-bold text-[#3b4a54]">{data.title}</p>
        <div className="grid max-w-[820px] grid-cols-3 divide-x divide-[#e9edef]">
          {data.columns.map((col) => (
            <div key={col.id} className="px-5 py-4">
              <div className="flex items-start gap-3">
                <NavIcon name={col.icon} />
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-bold text-[#111b21]">{col.heading}</p>
                  <ul className="mt-3 space-y-2.5">
                    {col.links.map((text) => (
                      <li key={text}>
                        <Link href="#" className="text-[14px] text-[#3b4a54] transition hover:text-[#25D366]">
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {col.subheading ? (
                    <>
                      <p className="mt-5 text-[13px] font-bold text-[#111b21]">{col.subheading}</p>
                      <ul className="mt-2 space-y-2">
                        {col.sublinks.map((text) => (
                          <li key={text}>
                            <Link href="#" className="text-[13px] text-[#3b4a54] transition hover:text-[#25D366]">
                              {text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DropdownShell>
  );
}

function ResourcesMenu() {
  const data = businessNavMenus.resources;
  return (
    <DropdownShell align="center">
      <div className="p-2">
        <p className="px-4 pb-1 pt-3 text-[13px] font-semibold uppercase tracking-wide text-[#8696a0]">{data.title}</p>
        <ul className="py-2">
          {data.items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-[15px] text-[#111b21] transition hover:bg-[#f0f2f5]"
              >
                <NavIcon name={item.icon} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </DropdownShell>
  );
}

function DevelopersMenu() {
  const data = businessNavMenus.developers;
  return (
    <DropdownShell align="center" wide>
      <div className="p-2">
        <p className="px-4 pb-2 pt-3 text-[12px] font-semibold uppercase tracking-wider text-[#8696a0]">{data.title}</p>
        <div className="grid min-w-[440px] grid-cols-2 divide-x divide-[#e9edef]">
          {data.columns.map((col) => (
            <div key={col.id} className="px-5 py-4">
              <div className="flex items-start gap-3">
                <NavIcon name={col.icon} />
                <div>
                  <p className="text-[15px] font-bold text-[#111b21]">{col.heading}</p>
                  <div className="my-3 h-px bg-[#e9edef]" />
                  <ul className="space-y-3">
                    {col.links.map((text) => (
                      <li key={text}>
                        <Link href="#" className="text-[14px] text-[#111b21] transition hover:text-[#25D366]">
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DropdownShell>
  );
}

function PartnersMenu() {
  const data = businessNavMenus.partners;
  return (
    <DropdownShell align="right">
      <div className="p-2">
        <p className="px-4 pb-1 pt-3 text-[13px] font-semibold text-[#8696a0]">{data.title}</p>
        <ul className="py-2">
          {data.items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-[15px] font-medium text-[#111b21] transition hover:bg-[#f0f2f5]"
              >
                <NavIcon name={item.icon} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </DropdownShell>
  );
}

function MetaLogo() {
  return (
    <span className="text-[22px] font-bold tracking-tight text-[#0668E1]" aria-label="Meta">
      Meta
    </span>
  );
}

function NavItem({ label, menuKey }) {
  const menus = {
    products: <ProductsMenu />,
    resources: <ResourcesMenu />,
    developers: <DevelopersMenu />,
    partners: <PartnersMenu />,
  };

  return (
    <div className="group relative flex items-stretch">
      <span className="flex cursor-default items-center whitespace-nowrap px-2 py-3 text-[15px] font-medium text-white/95 transition group-hover:text-[#25D366] lg:px-3">
        {label}
      </span>
      {menus[menuKey]}
    </div>
  );
}

export default function BusinessSiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center">
            <MetaLogo />
          </Link>
        </div>
      </div>
      <div className="bg-[#073321]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8 lg:py-0">
          <Link href="/" className="flex shrink-0 items-center gap-2 py-3 text-white">
            <svg className="h-8 w-8 shrink-0 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="text-lg font-semibold tracking-tight">WhatsApp</span>
          </Link>

          <nav className="order-3 flex w-full flex-wrap justify-center gap-x-1 gap-y-0 lg:order-none lg:w-auto lg:flex-1 lg:justify-center lg:gap-x-0" aria-label="Business">
            {businessNav.map((item) => (
              <NavItem key={item.menuKey} label={item.label} menuKey={item.menuKey} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 py-3 sm:gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-[#073321] transition hover:bg-[#20bd5c]"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              href="#"
              className="rounded-full bg-[#25D366] px-4 py-2.5 text-[14px] font-semibold text-[#111b21] transition hover:bg-[#20bd5c] sm:px-5"
            >
              Get started
            </Link>
            <Link
              href="#download"
              className="rounded-full bg-white px-4 py-2.5 text-[14px] font-semibold text-[#073321] transition hover:bg-white/90 sm:px-5"
            >
              Download app
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
