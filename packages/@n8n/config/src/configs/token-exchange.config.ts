import { Config, Env } from '../decorators';

@Config
export class TokenExchangeConfig {
	/** Whether the token exchange endpoint (POST /auth/oauth/token) is enabled. */
	@Env('N8N_TOKEN_EXCHANGE_ENABLED')
	enabled: boolean = false;

	/**
	 * JSON array of trusted key sources for JWT verification.
	 * Each entry is validated against `TrustedKeySourceSchema`.
	 *
	 * Can also be loaded from a file by setting `N8N_TOKEN_EXCHANGE_TRUSTED_KEYS_FILE`
	 * to a path — the `@Env` decorator reads the file contents automatically.
	 */
	@Env('N8N_TOKEN_EXCHANGE_TRUSTED_KEYS')
	trustedKeys: string = '';
}
