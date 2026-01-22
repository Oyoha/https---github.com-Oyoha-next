export default async function ClientId({ params }) {
  const { clientId } = await params;
  return (
    <div>
      <h1>Клиент Id</h1>
      <p>{clientId}</p>
    </div>
  );
}
