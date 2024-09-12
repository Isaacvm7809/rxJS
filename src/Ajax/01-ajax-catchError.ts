import { catchError, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax'


export interface userGitHub {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
}




let users:userGitHub;
const url= 'https://api.github.com/users?per_page=5';

const fetchPromise = fetch(url);
const manejaError =(resp:Response) => {
    if (!resp.ok) throw new Error(resp.status.toString() + ' ' + resp.text );
    return resp;
}

// fetchPromise
//     .then(manejaError)
//     .then(resp =>   resp.json() )
//     .then( data => { users= data;
//         console.log(users);
//     }   )
//     .catch(err => console.log(err));

ajax(url).pipe(
    map(res=> res.response),
    catchError(err=>{
        console.warn('Error en API',err);
        return of([])
    })
).
subscribe( res=> {
    users = res as userGitHub;
    console.log('users', users);
});

    
    
    


