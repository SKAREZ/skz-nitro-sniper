const chalk = require('chalk');

module.exports = {
   clientOptions: {
      disabledEvents: [
         'TYPING_START',
         'VOICE_SERVER_UPDATE',
         'RELATIONSHIP_ADD',
         'RELATIONSHIP_REMOVE',
         'GUILD_ROLE_DELETE',
         'GUILD_ROLE_UPDATE',
         'GUILD_BAN_ADD',
         'GUILD_BAN_REMOVE',
         'CHANNEL_UPDATE',
         'CHANNEL_PINS_UPDATE',
         'MESSAGE_DELETE',
         'MESSAGE_UPDATE',
         'MESSAGE_DELETE_BULK',
         'MESSAGE_REACTION_ADD',
         'MESSAGE_REACTION_REMOVE',
         'GUILD_MEMBER_UPDATE',
         'GUILD_MEMBERS_CHUNK',
         'GUILD_ROLE_CREATE',
         'MESSAGE_REACTION_REMOVE_ALL',
         'USER_UPDATE',
         'USER_NOTE_UPDATE',
         'USER_SETTINGS_UPDATE',
         'PRESENCE_UPDATE',
         'VOICE_STATE_UPDATE',
         'GUILD_UPDATE',
         'GUILD_MEMBER_ADD',
         'GUILD_MEMBER_REMOVE'
      ],
      messageEditHistoryMaxSize: 1,
      messageSweepInterval: 1,
      messageCacheLifetime: 1,
      messageCacheMaxSize: 1,
      cacheChannels: true,
      restTimeOffset: 0,
      presence: { afk: true }
   },
   defaultSettings: {
      tokens: {
         // Main account token
         main: '',
         // Alt(s) account(s) token(s)
         alts: [
            ''
         ],
      },
      // Choose the mode for SKZ to proceed for sniping
      // Values: "main" = Only with main account | "alts" = Only with alt(s) account(s) | "both" = Use both of them
      mode: 'both',
      status: {
         // Define the profile activity status for the accounts
         // Values: "online" = Online | "idle" = Idle | "dnd" = Do not disturb | "offline" = Offline | "default" = Use the defaults status of the accounts
         main: 'default',
         alts: 'default'
      },
      nitro: {
         // Limit of nitros sniped for triggering the sniping cooldown
         max: 2,
         // Cooldown time (Hours)
         cooldown: 24,
         dm: {
            // Time to wait before claiming nitro in DMs (Seconds)
            delay: 10
         },
         // List of channel's IDs to ignore
         blacklistedChannels: ['']
      },
      giveaway: {
         // Activate or not giveaway sniping
         // Values: True/False
         enabled: true,
         // Cooldown to add reaction on a giveaway (Seconds)
         delay: 30,
         // Send a DM to the giveaway hoster if you won
         // Values: True/False
         dm: true,
         // Custom message to sent, you can edit it if you want
         dmMessages: [
            'yoo, ive won the giveaway :D',
            'can i have the nitro gift?'
         ],
         // Cooldown to wait before sending the first message in DM (Seconds)
         dmDelay: 20,
         // Delay between messages in DM (Seconds)
         messageDelay: 2,
         // List of blacklisted word(s) for giveaway prizes
         blacklistedWords: [
            'bot',
            'test',
            'ban'
         ],
         // Only add reactions to whitelisted giveaway prizes
         // Values: True/False
         whitelistOnly: false,
         // List of whitelisted word for giveaway prizes
         whitelistedWords: [
            'nitro'
         ],
         // List of blacklisted server(s)'s IDs
         blacklistedServers: [
            ''
         ],
         // Only add reactions in whitelisted servers
         whitelistServersOnly: false,
         // List of whitelisted server(s)'s IDs
         whitelistedServers: [
            ''
         ],
         // Prizes minimum and maximum character lenght
         prizeLength: {
            // Minimum character length of the prize
            min: 4,
            // Maximum character length of the prize (null = No limit)
            max: null
         }
      },
      invite: {
         // Activate or not server invitation sniping
         // Values: True/False
         enabled: true,
         delay: {
            // Minimum delay to accept the server invitation (Seconds)
            min: 10,
            // Maximum delay to accept the server invitation (Seconds)
            max: 20
         },
         members: {
            // Minimum member count required to join a server
            min: 1000,
            // Maximum member count required to join a server
            max: 50000
         },
         // Amount of joined server(s) by invitations for triggering the sniping cooldown
         max: 10,
         // Cooldown time after reached the maximum joined server(s) (Hours)
         cooldown: 3,
         // Accept or not the invitation on another alt/account (depends on the "mode" of SKZ) if the current alt/account has reached the limit
         queue: true,
         // Only allow alt(s) account(s) to snipe server invitations (Only if the "mode" is set to "both")
         // Values: True/False
         onlyAlts: true
      },
      webhook: {
         // Webhook's URL for sending notifications (Codes, Errors, Warns, Successed snipes...) (Recommended on a thrid-party server with only you)
         // To create a webhook, follow these steps: Server Settings > Integrations > Webhooks > Create a new webhook > Copy Webhook's link
         url: '',
         // These options are recommended to not be edited !
         // Values: True/False
         enabled: {
            // Send a message when a sniped code is invalid
            codeInvalid: true,
            // Send a message when a sniped code was already claimed
            codeAlreadyRedeemed: true,
            // Send a message when a sniped code is claimable
            codeSuccess: true,
            // Send a message when an account add a reaction to a giveaway
            giveawayEntered: false,
            // Send a message when an account won a giveaway
            giveawayWin: true,
            // Send a message when an account joined a server with a invitation
            inviteJoin: true,
            // Send a message when an account received an invalid server invitation
            inviteFail: false
         },
         // These options are recommended to not be edited !
         // Values: True/False
         mentionEveryone: {
            // Mention everyone if a sniped code is invalid
            codeInvalid: false,
            // Mention everyone if a sniped code was already claimed
            codeAlreadyRedeemed: false,
            // Mention everyone if a sniped code is claimable
            codeSuccess: true,
            // Mention everyone if a sniped code add a reaction to a giveaway
            giveawayEntered: false,
            // Mention everyone if a sniped code joined a server with a invitation
            giveawayWin: true,
            // Mention everyone if an account joined a server by a invitation
            inviteJoin: false,
            // Mention everyone if an account received an invalid server invitation
            inviteFail: false
         }
      },
      // Do not touch !
      log: true
   },
   cooldown: (type, max, hours) => `Cooldown hit after ${max} ${type}s were sniped. Pausing SKZ ${type} for ${hours} hours.`,
   xSuperProperties: 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJjYW5hcnkiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC4yMSIsIm9zX3ZlcnNpb24iOiIxMC4wLjE5MDQyIiwib3NfYXJjaCI6Ing2NCIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImNsaWVudF9idWlsZF9udW1iZXIiOjc1NjU3LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==',
   xContextProperties: 'eyJsb2NhdGlvbiI6Ikludml0ZSBCdXR0b24gRW1iZWQiLCJsb2NhdGlvbl9ndWlsZF9pZCI6bnVsbCwibG9jYXRpb25fY2hhbm5lbF9pZCI6IjgwNzgyMTYwMDM1ODc5MzI1NiIsImxvY2F0aW9uX2NoYW5uZWxfdHlwZSI6MSwibG9jYXRpb25fbWVzc2FnZV9pZCI6IjgwNzgyMTY5ODUwMTA1MDQzOSJ9',
   webhookCantReach: (e) => `Unable to reach your webhook - ${e}`,
   invalidConfig: '[SKZ] Error while trying to load the settings, try to restore the "settings.env" file.',
   noMode: '[SKZ] Error while trying to load the settings, no mode assigned for the snipe.',
   invalidMode: '[SKZ] Error while trying to load the settings, incorrect mode assigned for SKZ.',
   noMain: '[SKZ] Error while trying to load the settings, please enter a correct token for the main account.',
   noAlts: '[SKZ] Error while trying to load the settings, please enter a correct token for the alt(s) account(s).',
   invalidTokens: '[SKZ] Error while trying to load the settings, please enter a corrects tokens for both accounts.',
   userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.37 Chrome/91.0.4472.106 Electron/13.1.4 Safari/537.36',
   ready: (accounts, servers) => `[SKZ] Running with ${accounts} ${accounts > 1 ? 'accounts' : 'account'} and ${servers} ${servers > 1 || servers == 0 ? 'servers' : 'server'}.`,
   unknownResponse: (code, location, author, end, body) => `Unknown Response | ${body} | Code: ${chalk.bold(code)} | ${location} | ${author} | ${end}`,
   bothModeNoAlts: '[SKZ] No alts were able to log in, trying to use only the main account.',
   bothModeNoMain: "[SKZ] Error while trying to start SKZ, impossible to be able to log in the main account.",
   noPaymentMethod: '[SKZ] Your main account as no billing informations, claiming codes may not work!',
   invalidWebhookType: '[SKZ] Error while trying to load the settings, invalid Webhook type.',
   joinedServer: (invite, server, location, author, account, time) => `[SKZ] ${account} joined ${server} after ${time} | Invite: ${invite} | ${location} | ${author}`,
   giveawayWon: (prize, hoster, guild, channel) => `[SKZ] Won giveaway of ${chalk.bold(prize)} from ${hoster} in (${guild} > #${channel}).`,
   failedGiveawayReact: (prize, hoster, guild, channel, timeTook) => `[SKZ] Failed to react to giveaway of ${chalk.bold(prize)} from ${hoster.tag} in (${guild} > #${channel}) after ${timeTook}.`,
   reactedGiveaway: (prize, hoster, guild, channel, timeTook) => `[SKZ] Reacted to giveaway of ${chalk.bold(prize)} from ${hoster} in (${guild} > #${channel}) after ${timeTook}.`,
   dmHosterSuccess: (hoster, prize, server, channel, timeTook) => `[SKZ] DMed ${hoster} after winning ${chalk.bold(prize)} in (${server} > #${channel}) after ${timeTook}.`,
   dmHosterFail: (hoster, prize, server, channel, timeTook) => `[SKZ] Couldn't DM ${hoster} after winning ${chalk.bold(prize)} in (${server} > #${channel}) after ${timeTook}.`,
   paymentMethodFail: (body) => `[SKZ] Unable to get billing source. ${body}`,
   invalidTokenOnSnipe: (code, from, author, end) => `[SKZ] Invalid Token | Code: ${chalk.bold(code)} | ${from} | ${author} | ${end}`,
   phinError: (err, code, from, author, end) => `[SKZ] ${err} | Code: ${chalk.bold(code)} | ${from} | ${author} | ${end}`,
   unknownCode: (code, from, author, end) => `[SKZ] Invalid Code | Code: ${chalk.bold(code)} | ${from} | ${author} | ${end}`,
   alreadyRedeemedCode: (code, from, author, end) => `[SKZ] Already Redeemed | Code: ${chalk.bold(code)} | ${from} | ${author} | ${end}`,
   snipedCode: (code, type, from, author, end) => `[SKZ] Success | Code: ${chalk.bold(code)} | ${type} | ${from} | ${author} | ${end}`,
   duplicateFound: (code, location, author) => `[SKZ] Avoiding Duplicate | Code: ${chalk.bold(code)} | ${location} | ${author}`,
   webhookTypes: ['codeInvalid', 'codeAlreadyRedeemed', 'codeSuccess', 'giveawayEntered', 'giveawayWin', 'inviteJoin', 'inviteFail'],
   inviteFail: (invite, server, location, error, author, account, time) => `${account} failed to join ${server} after ${time} | ${error} | Invite: ${invite} | ${location} | ${author}`,
   fields: {
      codeFail: (time, code, location) => [
         { key: 'Time Taken', value: time },
         { key: 'Code', value: code },
         { key: 'Location', value: location },
      ],
      codeSuccess: (time, type, code, location) => [
         { key: 'Time Taken', value: time, },
         { key: 'Type', value: type },
         { key: 'Code', value: code },
         { key: 'Location', value: location },
      ],
      giveawayEntered: (server, channel, timeTook, prize) => [
         { key: 'Location', value: `${server} > #${channel}` },
         { key: 'Prize', value: prize },
         { key: 'Time Waited', value: timeTook }
      ],
      giveawayWin: (server, channel, prize) => [
         { key: 'Location', value: `${server} > #${channel}` },
         { key: 'Prize', value: prize },
      ],
      inviteJoin: (location, invite, server, timeTook) => [
         { key: 'Location', value: location },
         { key: 'Server Joined', value: server },
         { key: 'Invite Used', value: invite },
         { key: 'Time Waited', value: timeTook }
      ],
      inviteFail: (location, error, invite, server, timeTook) => [
         { key: 'Location', value: location },
         { key: 'Server', value: server },
         { key: 'Invite Used', value: invite },
         { key: 'Time Waited', value: timeTook },
         { key: 'Error', value: error }
      ]
   },
   titles: {
      codeInvalid: '❌ Invalid Code',
      codeAlreadyRedeemed: '❌ Already Redeemed Code',
      codeSuccess: '🎉 Nitro Sniped',
      giveawayEntered: '✅ Giveaway Entered',
      giveawayWin: '🎉 Giveaway Won',
      inviteJoin: '✅ Joined Server',
      inviteFail: '❌ Invite Snipe Failed'
   },
   colors: {
      error: '#FF4A4A',
      success: '#3DFF54',
      warn: '#FF834A'
   },
   paymentSourceURL: 'https://discord.com/api/v8/users/@me/billing/payment-sources',
   redeemCodeURL: (code) => `https://discord.com/api/v8/entitlements/gift-codes/${code}/redeem`,
   inviteFetchURL: (invite) => `https://discord.com/api/v8/invites/${encodeURIComponent(invite)}?with_counts=true`,
};
