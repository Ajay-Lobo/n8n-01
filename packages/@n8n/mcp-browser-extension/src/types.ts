// ---------------------------------------------------------------------------
// Shared shapes
// ---------------------------------------------------------------------------

export interface ControlledTabId {
	targetId: string;
	chromeTabId: number;
}

export type ConnectionStatus = 'disconnected' | 'connected' | 'connecting';

export interface ConnectResponse {
	success: boolean;
	error?: string;
}

export interface StatusResponse {
	connected?: boolean;
	tabIds?: ControlledTabId[];
}

export interface TabManagementSettings {
	allowTabCreation: boolean;
	allowTabClosing: boolean;
}

// ---------------------------------------------------------------------------
// Extension messages (UI → background)
// ---------------------------------------------------------------------------

export interface GetTabsMessage {
	type: 'getTabs';
}

export interface ConnectMessage {
	type: 'connect';
	relayUrl: string;
	selectedTabIds: number[];
}

export interface DisconnectMessage {
	type: 'disconnect';
}

export interface GetStatusMessage {
	type: 'getStatus';
}

export interface UpdateSettingsMessage {
	type: 'updateSettings';
	settings: TabManagementSettings;
}

export interface GetSettingsMessage {
	type: 'getSettings';
}

export interface GetRelayUrlMessage {
	type: 'getRelayUrl';
}

export interface ClearRelayUrlMessage {
	type: 'clearRelayUrl';
}

export type ExtensionMessage =
	| GetTabsMessage
	| ConnectMessage
	| DisconnectMessage
	| GetStatusMessage
	| UpdateSettingsMessage
	| GetSettingsMessage
	| GetRelayUrlMessage
	| ClearRelayUrlMessage;

// ---------------------------------------------------------------------------
// Background → UI push messages
// ---------------------------------------------------------------------------

export interface RelayUrlReadyMessage {
	type: 'relayUrlReady';
	relayUrl: string;
}

export interface StatusChangedMessage {
	type: 'statusChanged';
	connected: boolean;
	tabIds?: ControlledTabId[];
}

export type BackgroundPushMessage = RelayUrlReadyMessage | StatusChangedMessage;

// ---------------------------------------------------------------------------
// Type guards
// ---------------------------------------------------------------------------

export function isConnectResponse(raw: unknown): raw is ConnectResponse {
	return (
		raw !== null &&
		typeof raw === 'object' &&
		'success' in raw &&
		typeof (raw as Record<string, unknown>).success === 'boolean'
	);
}

export function isStatusResponse(raw: unknown): raw is StatusResponse {
	if (raw === null || typeof raw !== 'object') return false;
	const obj = raw as Record<string, unknown>;
	if ('connected' in obj && typeof obj.connected !== 'boolean') return false;
	return true;
}

export function isTabManagementSettings(raw: unknown): raw is TabManagementSettings {
	return (
		raw !== null &&
		typeof raw === 'object' &&
		'allowTabCreation' in raw &&
		'allowTabClosing' in raw &&
		typeof (raw as Record<string, unknown>).allowTabCreation === 'boolean' &&
		typeof (raw as Record<string, unknown>).allowTabClosing === 'boolean'
	);
}
