interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#00B9DC]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-stone-900 sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-tight text-gray-500">{description}</p>
      ) : null}
    </div>
  );
}
