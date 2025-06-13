import CategoryEditPage from "@/components/admin/CategoryEditPage";

export default function Page({ params }) {
  return <CategoryEditPage category_id={params.category_id} />;
}
