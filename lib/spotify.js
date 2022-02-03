import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-real-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    //"user-library-modify",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-current-playback-state",
    "user-read-recently-played",
    "user-follow-read",
].join(',');

const param = {
    scope: scopes,
}; 

const queryParamString = new URLSearchParams(params);
const LOGIN_URL = "https://accounts.spotify.com/authorize?"+queryParamString.toString();