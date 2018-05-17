class Github
{
  constructor()
  {
    this.client_id = '75eed1ebb487d2c88b83';
    this.client_secret = '4df55d4f9ad972f55d8993dc9927ef78c4fc032e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user)
  {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}