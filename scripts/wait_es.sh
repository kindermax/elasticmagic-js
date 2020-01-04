#!/usr/bin/env bash

HOST=$1

echo " * Waiting Elasticsearch at: ${HOST} ..."
while true; do
	output=`curl -XGET "${HOST}/_cat/health?h=status" -s | tr -d '[[:space:]]'`
	if [ -z "${output}" ]; then
		echo -n "."
	else
		echo " > Elasticsearch status: ${output}"
	fi
	if [ "${output}" = "green" -o "${output}" = "yellow" ]; then
		break
	fi
	sleep 1;
done
echo " * Elasticsearch is ready!"
