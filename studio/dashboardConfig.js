export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600633a4e6f31a0dbf28686f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ma7mum83',
                  apiId: 'bd9a7ed7-628d-4d16-8052-e775a45d56e2'
                },
                {
                  buildHookId: '600633a42191b4fa7fbaecf2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sc2gqhcu',
                  apiId: '432812d0-429c-4ea3-9261-a770b5172d9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ayeezero/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sc2gqhcu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
