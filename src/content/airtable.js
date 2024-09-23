import Airtable from "airtable";

// Configuration de la base Airtable
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey:
    "patKnezAOJGoUaTsj.45c7e6bb3a784f24382031c3ea58201b1532a27e77bd1f62054b9753ff21ce7d",
});
var base = Airtable.base("appxpYvEqbCqg7BgX");

export default base;
