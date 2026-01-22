export async function GET(request) {
  const data = {
    name: "Bob",
    age: 10,
    bio: "some info",
  };

  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  return new Response(request);
}
