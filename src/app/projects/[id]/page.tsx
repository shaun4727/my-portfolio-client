import SingleProjectSection from '@/components/projects/components/single-project-section';

export default async function SingleProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="single-project-section default-padding-body">
      <SingleProjectSection id={id} />
    </div>
  );
}
