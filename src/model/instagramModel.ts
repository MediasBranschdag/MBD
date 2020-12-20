import BACKEND_PATH from "../backend-environment"

export class InstagramPost {
    id: string
    imageUrl: string
    imageText: string
    linkToPost: string

    constructor(
        id: string,
        imageURL: string,
        imageText: string,
        linkToPost: string
    ) {
        this.id = id
        this.imageUrl = imageURL
        this.imageText = imageText
        this.linkToPost = linkToPost
    }
}

export class InstagramModel {
    static getInstagramImages(): Promise<Array<InstagramPost>> {

        return fetch(BACKEND_PATH + "instagram.php")
            .then(r => r.json())
            .then(posts => posts.data.map((post: any) => {
                return new InstagramPost(
                    post.id,
                    post.media_url ?? post.thumbnail_url,
                    post.caption,
                    post.permalink
                );
            }))
            .catch(r => {
                return []
            });
    }
}