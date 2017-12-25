const initialState ={
    projects: [
        {
            id: 0,
            image: "http://stanfordflipside.com/images/279puppies.jpg",
            title: "Project 1",
            description: "brief 1 sentence line",
            summary:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa praesentium, suscipit, itaque maxime officiis fugit doloribus aliquam dolorum voluptatum impedit cum explicabo cupiditate, neque harum libero voluptate. Reprehenderit, eum beatae!",
            liveLink: "https://google.com",
            githubLink: "https://facebook.com",
            supportingImages: []
          },
          {
            id:1,
            image:
              "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8",
            title: "Project 2",
            description: "brief 1 sentence line",
            summary:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa praesentium, suscipit, itaque maxime officiis fugit doloribus aliquam dolorum voluptatum impedit cum explicabo cupiditate, neque harum libero voluptate. Reprehenderit, eum beatae!",
            liveLink: "https://google.com",
            githubLink: "https://facebook.com",
            supportingImages: []
          }
    ],
    selectedProjectId: ''

}

export default function HomeReducer(store = initialState, action){
    const {type, payload } = action;

    switch(type){
        case 'TEST' : {
            return {
                ...store,
                new: payload
            };
        }

        default: {
            return store;
        }
    }
}