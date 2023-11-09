.PHONY: enable-youtube

PROJECT_ID := yt_video_downloader
OLD_PROJECT_ID := arshan-rn-template
rename-project:
	# renaming generic files
	sed -i 's/"name": "$(OLD_PROJECT_ID)"/"name": "$(PROJECT_ID)"/' package.json
	sed -i 's/"name": "$(OLD_PROJECT_ID)"/"name": "$(PROJECT_ID)"/' app.json
	sed -i 's/"displayName": "$(OLD_PROJECT_ID)"/"displayName": "$(PROJECT_ID)"/' app.json


get-current-project:
	$(eval PROJECT_ID := $(shell gcloud config get-value project))
	@echo "$(PROJECT_ID)"

######################### youtube data api key #########################
enable-youtube:
	gcloud services enable youtube.googleapis.com

ACCOUNT_NAME := youtube-data-api-key
ACCOUNT_DISPLAY_NAME := "YouTube Data API Key"

SERVICE_ACCOUNT_EMAIL := $(ACCOUNT_NAME)@$(PROJECT_ID).iam.gserviceaccount.com


run:
	gcloud iam service-accounts describe $(SERVICE_ACCOUNT) --project=$(PROJECT_ID)

create-service-account:
	gcloud iam service-accounts create $(ACCOUNT_NAME) --display-name $(ACCOUNT_DISPLAY_NAME) --project=$(PROJECT_ID)

KEYFILE := "youtube-key.json"

create-json-key:
	gcloud iam service-accounts keys create $(KEYFILE) --iam-account=$(SERVICE_ACCOUNT_EMAIL)

KEY_NAME := "$(PROJECT_ID)-youtube-key"
create-youtube-api-key:
	gcloud api-keys create $(KEY_NAME) --project=$(PROJECT_ID)

