// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

/*
{
    artist: ["Queen"],
    length: 355,
    name: "Bohemian Rhapsody",
    type: "song",
},
*/
interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

/*
songs: [
    {
        artist: ["Queen"],
        length: 223,
        name: "Death On Two Legs (Dedicated to...)",
        type: "song",
    },
    {
        artist: "Queen",
        length: 68,
        name: "Lazing on a Sunday Afternoon",
        type: "song",
    },
    {
        artist: ["David Bowie", "Queen"],
        length: 248,
        name: "Under Pressure",
        type: "song",
    },
],
type: "album",
*/
interface Album {
	songs: Song[];
	type: "album";
}

/*
{
    resolve: () => [
        {
            artist: ["Queen"],
            length: 223,
            name: "Death On Two Legs (Dedicated to...)",
            type: "song",
        },
        {
            artist: "Queen",
            length: 68,
            name: "Lazing on a Sunday Afternoon",
            type: "song",
        },
    ],
    type: "playlist",
},
*/
export interface Playlist {
	resolve(): Song[];
	type: "playlist";
}

interface Artist {
	[i: string]: string[];
}

interface ReturnType {
	artists: Artist;
	songs: string[];
	time: number;
}

export type PlaylistItem = Song | Album | Playlist;

export function unrollPlaylist(items: PlaylistItem[]): ReturnType {
	let artists: Artist = {};
	let songs: string[] = [];
	let time = 0;

	function ProcessSong(song: Song): void {
		songs.push(song.name);
		time += song.length;

		if (typeof song.artist == "string") {
			if (!artists[song.artist]) {
				artists[song.artist] = [];
			}
			artists[song.artist].push(song.name);
		} else {
			song.artist.forEach((artist) => {
				if (!artists[artist]) {
					artists[artist] = [];
				}
				artists[artist].push(song.name);
			});
		}
	}

	for (let i = 0; i < items.length; i++) {
		switch (items[i].type) {
			case "song":
				ProcessSong(items[i] as Song);
				break;
			case "album":
				(items[i] as Album).songs.forEach(ProcessSong);
				break;
			case "playlist":
				(items[i] as Playlist).resolve().forEach((song) => {
					ProcessSong(song);
				});
				break;
		}
	}

	return { artists, songs, time };
}
