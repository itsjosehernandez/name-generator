let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io", ".gov"];

for (let pr of pronoun) {
  for (let ad of adj) {
    for (let no of noun) {
      for (let ex of extensions) {
        console.log(pr + ad + no + ex);
      }
    }
  }
}
