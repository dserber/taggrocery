dmx.config({
  "index": {
    "getneededitems": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "id"
          },
          {
            "type": "text",
            "name": "name"
          },
          {
            "type": "text",
            "name": "notes"
          },
          {
            "type": "text",
            "name": "price"
          },
          {
            "type": "text",
            "name": "quantity"
          },
          {
            "type": "object",
            "name": "tags",
            "sub": [
              {
                "type": "text",
                "name": "name"
              },
              {
                "type": "text",
                "name": "id"
              }
            ]
          },
          {
            "type": "boolean",
            "name": "done"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "alt-svc"
          },
          {
            "type": "text",
            "name": "cache-control"
          },
          {
            "type": "text",
            "name": "content-encoding"
          },
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "etag"
          },
          {
            "type": "text",
            "name": "function-execution-id"
          },
          {
            "type": "text",
            "name": "server"
          },
          {
            "type": "text",
            "name": "status"
          },
          {
            "type": "text",
            "name": "vary"
          },
          {
            "type": "text",
            "name": "x-cloud-trace-context"
          },
          {
            "type": "text",
            "name": "x-powered-by"
          }
        ]
      }
    ],
    "neededitems": {
      "meta": [
        {
          "type": "text",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "notes"
        },
        {
          "type": "text",
          "name": "price"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "object",
          "name": "tags",
          "sub": [
            {
              "type": "text",
              "name": "id"
            },
            {
              "type": "text",
              "name": "name"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "type": "text",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "notes"
        },
        {
          "type": "text",
          "name": "price"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "object",
          "name": "tags",
          "sub": [
            {
              "type": "text",
              "name": "id"
            },
            {
              "type": "text",
              "name": "name"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": [
        {
          "type": "text",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "notes"
        },
        {
          "type": "text",
          "name": "price"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "object",
          "name": "tags",
          "sub": [
            {
              "type": "text",
              "name": "name"
            },
            {
              "type": "text",
              "name": "id"
            }
          ]
        },
        {
          "type": "boolean",
          "name": "done"
        }
      ],
      "outputType": "array"
    },
    "repeat3": {
      "meta": [
        {
          "type": "text",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "notes"
        },
        {
          "type": "text",
          "name": "price"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "object",
          "name": "tags",
          "sub": [
            {
              "type": "text",
              "name": "name"
            },
            {
              "type": "text",
              "name": "id"
            }
          ]
        },
        {
          "type": "boolean",
          "name": "done"
        }
      ],
      "outputType": "array"
    },
    "api1": [
      {
        "type": "text",
        "name": "new"
      }
    ]
  }
});
