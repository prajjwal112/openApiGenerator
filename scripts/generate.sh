specUrl=$1
apiName=$2
echo "*****"
    echo "Generating client \"$apiName\""
    ./node_modules/.bin/openapi-generator-cli generate -i $specUrl -g typescript-angular -o ./openapi/$apiName-api
    echo "Generated"