import type { RequestEvent } from '@sveltejs/kit';
import type { JwtPayload } from 'jsonwebtoken';

/**
 * Auth context that is injected onto every request on Edge
 */
export type EdgeAuthState = {
	isLoggedIn: boolean;
	id?: string;
	jwt?: JwtPayload;
};

export type ServerCacheAdapter = {
	get(key: string): Promise<string | null>;
	set(key: string, value: string): Promise<void>;
	expire(key: string, seconds: number): Promise<void>;
};

export type MakeServerCacheAdapter = (prefix: string) => ServerCacheAdapter;

export type ServerTRPCEnforcer = (request: RequestEvent) => Promise<void>;
