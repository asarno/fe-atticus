import useSWR from "swr";
import { listSongs } from "../api";

export function useSongs() {
	const { data, error } = useSWR(`/songs`, () => listSongs());

    if (error) {
		throw error;
	}

	return { isLoading: !data, data };
}