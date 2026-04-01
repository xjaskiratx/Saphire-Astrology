#!/bin/bash

# Configuration
HOST="www.saphireastro.in"
KEY="8e1ae50e4efbcad65f8707e4efbcaee1d6a88a09"
URL_LIST=(
    "https://$HOST/"
    "https://$HOST/contact"
    "https://$HOST/faqs"
    "https://$HOST/about-us"
    "https://$HOST/services"
    "https://$HOST/privacy-policy"
    "https://$HOST/terms-of-service"
)

# Convert array to JSON string
URLS_JSON=$(printf '"%s",' "${URL_LIST[@]}" | sed 's/,$//')

# Payload
PAYLOAD="{
  \"host\": \"$HOST\",
  \"key\": \"$KEY\",
  \"urlList\": [$URLS_JSON]
}"

echo "Submitting URLs to IndexNow..."
RESPONSE=$(curl -s -w "%{http_code}" -X POST "https://api.indexnow.org/indexnow" \
     -H "Content-Type: application/json; charset=utf-8" \
     -d "$PAYLOAD")

HTTP_CODE="${RESPONSE: -3}"

if [ "$HTTP_CODE" == "200" ] || [ "$HTTP_CODE" == "202" ]; then
    echo "Success! (HTTP $HTTP_CODE)"
else
    echo "Failed! (HTTP $HTTP_CODE)"
    echo "Response: ${RESPONSE%???}"
    exit 1
fi
