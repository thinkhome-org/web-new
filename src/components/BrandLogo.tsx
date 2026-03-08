import Image from "next/image";
import Link from "next/link";

const LOGO_WIDTH = 159;
const LOGO_HEIGHT = 33;

type BrandLogoProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, "children" | "href"> & {
  priority?: boolean;
};

export function BrandLogo({
  className,
  priority = false,
  ...props
}: BrandLogoProps): React.JSX.Element {
  return (
    <Link aria-label="ThinkHome - domovská stránka" className={className} href="/" {...props}>
      <Image
        alt="ThinkHome"
        className="h-auto w-[132px] md:w-[159px]"
        height={LOGO_HEIGHT}
        priority={priority}
        src="/logo/primary/SVG%20Transparent/primary_white-on-transparent.svg"
        width={LOGO_WIDTH}
      />
    </Link>
  );
}
