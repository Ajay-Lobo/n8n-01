import { Config, Env } from '../decorators';

@Config
export class TokenExchangeConfig {
	/** Whether the token exchange endpoint (POST /auth/oauth/token) is enabled. */
	@Env('N8N_TOKEN_EXCHANGE_ENABLED')
	enabled: boolean = false;

	/** Interval in seconds between JTI cleanup runs. */
	@Env('N8N_TOKEN_EXCHANGE_JTI_CLEANUP_INTERVAL_SECONDS')
	jtiCleanupIntervalSeconds: number = 60;

	/** Maximum number of expired JTI rows to delete per cleanup run. */
	@Env('N8N_TOKEN_EXCHANGE_JTI_CLEANUP_BATCH_SIZE')
	jtiCleanupBatchSize: number = 1000;
}
