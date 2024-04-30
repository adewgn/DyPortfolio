export default {
    name:'experiences',
    title:'Experiences',
    type:'document',
    fields:[
           {name:'name',
               title:'Heading',
               type:'string'
            },
            {
                name:'company',
                title:'Sub Heading',
                type:'string'
            },
            {
                name:'desc',
                title:'Hover Desc',
                type:'string'
            },
            {
                name:'imgUrl',
                title:'Company Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
            },
    ]
}