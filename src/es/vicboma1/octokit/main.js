const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({});

octokit.repos.getContent({
    owner: 'vicboma1',
    repo: 'octokit-get-content-file-github',
    path: 'README.md'
}).then(result => {
      console.log(result.data.content)
      const content = Buffer.from(result.data.content, 'base64').toString()
      console.log(content)
}).catch( ex => {
      console.log('Error:'+ex)
})