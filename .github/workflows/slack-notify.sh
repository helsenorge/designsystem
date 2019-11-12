#!/bin/sh

HOOK_URL=$1
SEINFELDS=(
	"https://media.giphy.com/media/13xHqoOQOdFu5a/source.gif"
	"https://media.giphy.com/media/Xhxd8T0og4oKs/giphy.gif"
	"https://media.giphy.com/media/WMjfO612POH72/source.gif"
)
read -r -d '' MSG <<'EOF'
payload={
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*New version has been published! :eyes:*\n All you have to do is force feed an upgrade command into your perfered terminal of choice."
			},
			"accessory": {
				"type": "image",
				"image_url": "https://media.giphy.com/media/Xhxd8T0og4oKs/giphy.gif",
				"alt_text": "happy jerry"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Upgrade with *Yarn*\n`yarn upgrade @helsenorge/designsystem@dev`"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Upgrade with *NPM*\n`npm update @helsenorge/designsystem@dev`"
			}
		}
	]
}
EOF

curl -X POST --data-urlencode "$MSG" $HOOK_URL