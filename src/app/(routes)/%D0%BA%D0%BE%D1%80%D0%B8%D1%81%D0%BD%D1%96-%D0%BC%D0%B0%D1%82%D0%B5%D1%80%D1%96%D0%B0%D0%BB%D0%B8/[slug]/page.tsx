export async function generateStaticParams() {
  return ["%D1%82%D0%B5%D1%81%D1%82%D0%B8"].map((link) => ({
    slug: link,
  }));
}
export default function page() {
  return <div>subpage works!</div>;
}
