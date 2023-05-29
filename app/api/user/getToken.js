

export default async function getToken(request) {

  const body = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: request,
    grant_type:'authorization_code',
    redirect_uri:'http://localhost:3000/callback',
  }

  await fetch(
    `https://bpx-api.gfresh.cc/oauth/token`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        accept: 'application/json',
      },
    }
  ).then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.error(err);
  });
  // const result = await res.json();

  return 'nothing'
  
}