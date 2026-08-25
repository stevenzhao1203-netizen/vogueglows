type BrandMarkProps = { inverted?: boolean };

export function BrandMark({ inverted = false }: BrandMarkProps) {
  return <a className={`brand-mark${inverted ? " brand-mark-inverted" : ""}`} href="/" aria-label="VogueGlows home">
    <span className="brand-mark-vogue">Vogue</span>
    <span className="brand-mark-glows">Glows<span className="brand-mark-stroke" aria-hidden="true" /></span>
  </a>;
}
