/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
// import * as $protobuf from "protobufjs/minimal";
// import * as $protobuf from "protobufjs/minimal.js";

const $protobuf = await import("protobufjs/minimal.js").then(m => m.default || m);

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const dis = $root.dis = (() => {

    /**
     * Namespace dis.
     * @exports dis
     * @namespace
     */
    const dis = {};

    /**
     * ProtocolVersion enum.
     * @name dis.ProtocolVersion
     * @enum {number}
     * @property {number} PROTOCOL_VERSION_OTHER=0 PROTOCOL_VERSION_OTHER value
     * @property {number} IEEE_1278_1_1995=5 IEEE_1278_1_1995 value
     */
    dis.ProtocolVersion = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PROTOCOL_VERSION_OTHER"] = 0;
        values[valuesById[5] = "IEEE_1278_1_1995"] = 5;
        return values;
    })();

    /**
     * PduType enum.
     * @name dis.PduType
     * @enum {number}
     * @property {number} PDU_TYPE_OTHER=0 PDU_TYPE_OTHER value
     * @property {number} ENTITY_STATE=1 ENTITY_STATE value
     * @property {number} FIRE=2 FIRE value
     * @property {number} DETONATION=3 DETONATION value
     * @property {number} COLLISION=4 COLLISION value
     */
    dis.PduType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PDU_TYPE_OTHER"] = 0;
        values[valuesById[1] = "ENTITY_STATE"] = 1;
        values[valuesById[2] = "FIRE"] = 2;
        values[valuesById[3] = "DETONATION"] = 3;
        values[valuesById[4] = "COLLISION"] = 4;
        return values;
    })();

    /**
     * ProtocolFamily enum.
     * @name dis.ProtocolFamily
     * @enum {number}
     * @property {number} PROTOCOL_FAMILY_OTHER=0 PROTOCOL_FAMILY_OTHER value
     * @property {number} ENTITY_INFORMATION=1 ENTITY_INFORMATION value
     */
    dis.ProtocolFamily = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PROTOCOL_FAMILY_OTHER"] = 0;
        values[valuesById[1] = "ENTITY_INFORMATION"] = 1;
        return values;
    })();

    /**
     * ForceId enum.
     * @name dis.ForceId
     * @enum {number}
     * @property {number} FORCE_ID_OTHER=0 FORCE_ID_OTHER value
     * @property {number} FRIENDLY=1 FRIENDLY value
     * @property {number} OPPOSING=2 OPPOSING value
     */
    dis.ForceId = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FORCE_ID_OTHER"] = 0;
        values[valuesById[1] = "FRIENDLY"] = 1;
        values[valuesById[2] = "OPPOSING"] = 2;
        return values;
    })();

    /**
     * CharacterSet enum.
     * @name dis.CharacterSet
     * @enum {number}
     * @property {number} UNUSED=0 UNUSED value
     * @property {number} ASCII=1 ASCII value
     */
    dis.CharacterSet = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNUSED"] = 0;
        values[valuesById[1] = "ASCII"] = 1;
        return values;
    })();

    dis.EntityID = (function() {

        /**
         * Properties of an EntityID.
         * @memberof dis
         * @interface IEntityID
         * @property {number|null} [siteID] EntityID siteID
         * @property {number|null} [applicationID] EntityID applicationID
         * @property {number|null} [entityID] EntityID entityID
         */

        /**
         * Constructs a new EntityID.
         * @memberof dis
         * @classdesc Represents an EntityID.
         * @implements IEntityID
         * @constructor
         * @param {dis.IEntityID=} [properties] Properties to set
         */
        function EntityID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityID siteID.
         * @member {number} siteID
         * @memberof dis.EntityID
         * @instance
         */
        EntityID.prototype.siteID = 0;

        /**
         * EntityID applicationID.
         * @member {number} applicationID
         * @memberof dis.EntityID
         * @instance
         */
        EntityID.prototype.applicationID = 0;

        /**
         * EntityID entityID.
         * @member {number} entityID
         * @memberof dis.EntityID
         * @instance
         */
        EntityID.prototype.entityID = 0;

        /**
         * Creates a new EntityID instance using the specified properties.
         * @function create
         * @memberof dis.EntityID
         * @static
         * @param {dis.IEntityID=} [properties] Properties to set
         * @returns {dis.EntityID} EntityID instance
         */
        EntityID.create = function create(properties) {
            return new EntityID(properties);
        };

        /**
         * Encodes the specified EntityID message. Does not implicitly {@link dis.EntityID.verify|verify} messages.
         * @function encode
         * @memberof dis.EntityID
         * @static
         * @param {dis.IEntityID} message EntityID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteID != null && Object.hasOwnProperty.call(message, "siteID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.siteID);
            if (message.applicationID != null && Object.hasOwnProperty.call(message, "applicationID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.applicationID);
            if (message.entityID != null && Object.hasOwnProperty.call(message, "entityID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.entityID);
            return writer;
        };

        /**
         * Encodes the specified EntityID message, length delimited. Does not implicitly {@link dis.EntityID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dis.EntityID
         * @static
         * @param {dis.IEntityID} message EntityID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityID message from the specified reader or buffer.
         * @function decode
         * @memberof dis.EntityID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dis.EntityID} EntityID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dis.EntityID();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.siteID = reader.uint32();
                        break;
                    }
                case 2: {
                        message.applicationID = reader.uint32();
                        break;
                    }
                case 3: {
                        message.entityID = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntityID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dis.EntityID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dis.EntityID} EntityID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityID message.
         * @function verify
         * @memberof dis.EntityID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteID != null && message.hasOwnProperty("siteID"))
                if (!$util.isInteger(message.siteID))
                    return "siteID: integer expected";
            if (message.applicationID != null && message.hasOwnProperty("applicationID"))
                if (!$util.isInteger(message.applicationID))
                    return "applicationID: integer expected";
            if (message.entityID != null && message.hasOwnProperty("entityID"))
                if (!$util.isInteger(message.entityID))
                    return "entityID: integer expected";
            return null;
        };

        /**
         * Creates an EntityID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dis.EntityID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dis.EntityID} EntityID
         */
        EntityID.fromObject = function fromObject(object) {
            if (object instanceof $root.dis.EntityID)
                return object;
            let message = new $root.dis.EntityID();
            if (object.siteID != null)
                message.siteID = object.siteID >>> 0;
            if (object.applicationID != null)
                message.applicationID = object.applicationID >>> 0;
            if (object.entityID != null)
                message.entityID = object.entityID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an EntityID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dis.EntityID
         * @static
         * @param {dis.EntityID} message EntityID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.siteID = 0;
                object.applicationID = 0;
                object.entityID = 0;
            }
            if (message.siteID != null && message.hasOwnProperty("siteID"))
                object.siteID = message.siteID;
            if (message.applicationID != null && message.hasOwnProperty("applicationID"))
                object.applicationID = message.applicationID;
            if (message.entityID != null && message.hasOwnProperty("entityID"))
                object.entityID = message.entityID;
            return object;
        };

        /**
         * Converts this EntityID to JSON.
         * @function toJSON
         * @memberof dis.EntityID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityID
         * @function getTypeUrl
         * @memberof dis.EntityID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dis.EntityID";
        };

        return EntityID;
    })();

    dis.EntityType = (function() {

        /**
         * Properties of an EntityType.
         * @memberof dis
         * @interface IEntityType
         * @property {number|null} [entityKind] EntityType entityKind
         * @property {number|null} [domain] EntityType domain
         * @property {number|null} [country] EntityType country
         * @property {number|null} [category] EntityType category
         * @property {number|null} [subcategory] EntityType subcategory
         * @property {number|null} [specific] EntityType specific
         * @property {number|null} [extra] EntityType extra
         */

        /**
         * Constructs a new EntityType.
         * @memberof dis
         * @classdesc Represents an EntityType.
         * @implements IEntityType
         * @constructor
         * @param {dis.IEntityType=} [properties] Properties to set
         */
        function EntityType(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityType entityKind.
         * @member {number} entityKind
         * @memberof dis.EntityType
         * @instance
         */
        EntityType.prototype.entityKind = 0;

        /**
         * EntityType domain.
         * @member {number} domain
         * @memberof dis.EntityType
         * @instance
         */
        EntityType.prototype.domain = 0;

        /**
         * EntityType country.
         * @member {number} country
         * @memberof dis.EntityType
         * @instance
         */
        EntityType.prototype.country = 0;

        /**
         * EntityType category.
         * @member {number} category
         * @memberof dis.EntityType
         * @instance
         */
        EntityType.prototype.category = 0;

        /**
         * EntityType subcategory.
         * @member {number} subcategory
         * @memberof dis.EntityType
         * @instance
         */
        EntityType.prototype.subcategory = 0;

        /**
         * EntityType specific.
         * @member {number} specific
         * @memberof dis.EntityType
         * @instance
         */
        EntityType.prototype.specific = 0;

        /**
         * EntityType extra.
         * @member {number} extra
         * @memberof dis.EntityType
         * @instance
         */
        EntityType.prototype.extra = 0;

        /**
         * Creates a new EntityType instance using the specified properties.
         * @function create
         * @memberof dis.EntityType
         * @static
         * @param {dis.IEntityType=} [properties] Properties to set
         * @returns {dis.EntityType} EntityType instance
         */
        EntityType.create = function create(properties) {
            return new EntityType(properties);
        };

        /**
         * Encodes the specified EntityType message. Does not implicitly {@link dis.EntityType.verify|verify} messages.
         * @function encode
         * @memberof dis.EntityType
         * @static
         * @param {dis.IEntityType} message EntityType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entityKind != null && Object.hasOwnProperty.call(message, "entityKind"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.entityKind);
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.domain);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.country);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.category);
            if (message.subcategory != null && Object.hasOwnProperty.call(message, "subcategory"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.subcategory);
            if (message.specific != null && Object.hasOwnProperty.call(message, "specific"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.specific);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.extra);
            return writer;
        };

        /**
         * Encodes the specified EntityType message, length delimited. Does not implicitly {@link dis.EntityType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dis.EntityType
         * @static
         * @param {dis.IEntityType} message EntityType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityType message from the specified reader or buffer.
         * @function decode
         * @memberof dis.EntityType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dis.EntityType} EntityType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityType.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dis.EntityType();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.entityKind = reader.uint32();
                        break;
                    }
                case 2: {
                        message.domain = reader.uint32();
                        break;
                    }
                case 3: {
                        message.country = reader.uint32();
                        break;
                    }
                case 4: {
                        message.category = reader.uint32();
                        break;
                    }
                case 5: {
                        message.subcategory = reader.uint32();
                        break;
                    }
                case 6: {
                        message.specific = reader.uint32();
                        break;
                    }
                case 7: {
                        message.extra = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntityType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dis.EntityType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dis.EntityType} EntityType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityType message.
         * @function verify
         * @memberof dis.EntityType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entityKind != null && message.hasOwnProperty("entityKind"))
                if (!$util.isInteger(message.entityKind))
                    return "entityKind: integer expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isInteger(message.domain))
                    return "domain: integer expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isInteger(message.country))
                    return "country: integer expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isInteger(message.category))
                    return "category: integer expected";
            if (message.subcategory != null && message.hasOwnProperty("subcategory"))
                if (!$util.isInteger(message.subcategory))
                    return "subcategory: integer expected";
            if (message.specific != null && message.hasOwnProperty("specific"))
                if (!$util.isInteger(message.specific))
                    return "specific: integer expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isInteger(message.extra))
                    return "extra: integer expected";
            return null;
        };

        /**
         * Creates an EntityType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dis.EntityType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dis.EntityType} EntityType
         */
        EntityType.fromObject = function fromObject(object) {
            if (object instanceof $root.dis.EntityType)
                return object;
            let message = new $root.dis.EntityType();
            if (object.entityKind != null)
                message.entityKind = object.entityKind >>> 0;
            if (object.domain != null)
                message.domain = object.domain >>> 0;
            if (object.country != null)
                message.country = object.country >>> 0;
            if (object.category != null)
                message.category = object.category >>> 0;
            if (object.subcategory != null)
                message.subcategory = object.subcategory >>> 0;
            if (object.specific != null)
                message.specific = object.specific >>> 0;
            if (object.extra != null)
                message.extra = object.extra >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an EntityType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dis.EntityType
         * @static
         * @param {dis.EntityType} message EntityType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.entityKind = 0;
                object.domain = 0;
                object.country = 0;
                object.category = 0;
                object.subcategory = 0;
                object.specific = 0;
                object.extra = 0;
            }
            if (message.entityKind != null && message.hasOwnProperty("entityKind"))
                object.entityKind = message.entityKind;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.subcategory != null && message.hasOwnProperty("subcategory"))
                object.subcategory = message.subcategory;
            if (message.specific != null && message.hasOwnProperty("specific"))
                object.specific = message.specific;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this EntityType to JSON.
         * @function toJSON
         * @memberof dis.EntityType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityType
         * @function getTypeUrl
         * @memberof dis.EntityType
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dis.EntityType";
        };

        return EntityType;
    })();

    dis.Vector3Int = (function() {

        /**
         * Properties of a Vector3Int.
         * @memberof dis
         * @interface IVector3Int
         * @property {number|null} [x] Vector3Int x
         * @property {number|null} [y] Vector3Int y
         * @property {number|null} [z] Vector3Int z
         */

        /**
         * Constructs a new Vector3Int.
         * @memberof dis
         * @classdesc Represents a Vector3Int.
         * @implements IVector3Int
         * @constructor
         * @param {dis.IVector3Int=} [properties] Properties to set
         */
        function Vector3Int(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vector3Int x.
         * @member {number} x
         * @memberof dis.Vector3Int
         * @instance
         */
        Vector3Int.prototype.x = 0;

        /**
         * Vector3Int y.
         * @member {number} y
         * @memberof dis.Vector3Int
         * @instance
         */
        Vector3Int.prototype.y = 0;

        /**
         * Vector3Int z.
         * @member {number} z
         * @memberof dis.Vector3Int
         * @instance
         */
        Vector3Int.prototype.z = 0;

        /**
         * Creates a new Vector3Int instance using the specified properties.
         * @function create
         * @memberof dis.Vector3Int
         * @static
         * @param {dis.IVector3Int=} [properties] Properties to set
         * @returns {dis.Vector3Int} Vector3Int instance
         */
        Vector3Int.create = function create(properties) {
            return new Vector3Int(properties);
        };

        /**
         * Encodes the specified Vector3Int message. Does not implicitly {@link dis.Vector3Int.verify|verify} messages.
         * @function encode
         * @memberof dis.Vector3Int
         * @static
         * @param {dis.IVector3Int} message Vector3Int message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vector3Int.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
            return writer;
        };

        /**
         * Encodes the specified Vector3Int message, length delimited. Does not implicitly {@link dis.Vector3Int.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dis.Vector3Int
         * @static
         * @param {dis.IVector3Int} message Vector3Int message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vector3Int.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vector3Int message from the specified reader or buffer.
         * @function decode
         * @memberof dis.Vector3Int
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dis.Vector3Int} Vector3Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vector3Int.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dis.Vector3Int();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
                        break;
                    }
                case 3: {
                        message.z = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Vector3Int message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dis.Vector3Int
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dis.Vector3Int} Vector3Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vector3Int.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vector3Int message.
         * @function verify
         * @memberof dis.Vector3Int
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vector3Int.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            return null;
        };

        /**
         * Creates a Vector3Int message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dis.Vector3Int
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dis.Vector3Int} Vector3Int
         */
        Vector3Int.fromObject = function fromObject(object) {
            if (object instanceof $root.dis.Vector3Int)
                return object;
            let message = new $root.dis.Vector3Int();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            return message;
        };

        /**
         * Creates a plain object from a Vector3Int message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dis.Vector3Int
         * @static
         * @param {dis.Vector3Int} message Vector3Int
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vector3Int.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            return object;
        };

        /**
         * Converts this Vector3Int to JSON.
         * @function toJSON
         * @memberof dis.Vector3Int
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vector3Int.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Vector3Int
         * @function getTypeUrl
         * @memberof dis.Vector3Int
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Vector3Int.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dis.Vector3Int";
        };

        return Vector3Int;
    })();

    dis.Orientation = (function() {

        /**
         * Properties of an Orientation.
         * @memberof dis
         * @interface IOrientation
         * @property {number|null} [psi] Orientation psi
         * @property {number|null} [theta] Orientation theta
         * @property {number|null} [phi] Orientation phi
         */

        /**
         * Constructs a new Orientation.
         * @memberof dis
         * @classdesc Represents an Orientation.
         * @implements IOrientation
         * @constructor
         * @param {dis.IOrientation=} [properties] Properties to set
         */
        function Orientation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Orientation psi.
         * @member {number} psi
         * @memberof dis.Orientation
         * @instance
         */
        Orientation.prototype.psi = 0;

        /**
         * Orientation theta.
         * @member {number} theta
         * @memberof dis.Orientation
         * @instance
         */
        Orientation.prototype.theta = 0;

        /**
         * Orientation phi.
         * @member {number} phi
         * @memberof dis.Orientation
         * @instance
         */
        Orientation.prototype.phi = 0;

        /**
         * Creates a new Orientation instance using the specified properties.
         * @function create
         * @memberof dis.Orientation
         * @static
         * @param {dis.IOrientation=} [properties] Properties to set
         * @returns {dis.Orientation} Orientation instance
         */
        Orientation.create = function create(properties) {
            return new Orientation(properties);
        };

        /**
         * Encodes the specified Orientation message. Does not implicitly {@link dis.Orientation.verify|verify} messages.
         * @function encode
         * @memberof dis.Orientation
         * @static
         * @param {dis.IOrientation} message Orientation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Orientation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.psi != null && Object.hasOwnProperty.call(message, "psi"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.psi);
            if (message.theta != null && Object.hasOwnProperty.call(message, "theta"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.theta);
            if (message.phi != null && Object.hasOwnProperty.call(message, "phi"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.phi);
            return writer;
        };

        /**
         * Encodes the specified Orientation message, length delimited. Does not implicitly {@link dis.Orientation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dis.Orientation
         * @static
         * @param {dis.IOrientation} message Orientation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Orientation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Orientation message from the specified reader or buffer.
         * @function decode
         * @memberof dis.Orientation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dis.Orientation} Orientation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Orientation.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dis.Orientation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.psi = reader.int32();
                        break;
                    }
                case 2: {
                        message.theta = reader.int32();
                        break;
                    }
                case 3: {
                        message.phi = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Orientation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dis.Orientation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dis.Orientation} Orientation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Orientation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Orientation message.
         * @function verify
         * @memberof dis.Orientation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Orientation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.psi != null && message.hasOwnProperty("psi"))
                if (!$util.isInteger(message.psi))
                    return "psi: integer expected";
            if (message.theta != null && message.hasOwnProperty("theta"))
                if (!$util.isInteger(message.theta))
                    return "theta: integer expected";
            if (message.phi != null && message.hasOwnProperty("phi"))
                if (!$util.isInteger(message.phi))
                    return "phi: integer expected";
            return null;
        };

        /**
         * Creates an Orientation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dis.Orientation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dis.Orientation} Orientation
         */
        Orientation.fromObject = function fromObject(object) {
            if (object instanceof $root.dis.Orientation)
                return object;
            let message = new $root.dis.Orientation();
            if (object.psi != null)
                message.psi = object.psi | 0;
            if (object.theta != null)
                message.theta = object.theta | 0;
            if (object.phi != null)
                message.phi = object.phi | 0;
            return message;
        };

        /**
         * Creates a plain object from an Orientation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dis.Orientation
         * @static
         * @param {dis.Orientation} message Orientation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Orientation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.psi = 0;
                object.theta = 0;
                object.phi = 0;
            }
            if (message.psi != null && message.hasOwnProperty("psi"))
                object.psi = message.psi;
            if (message.theta != null && message.hasOwnProperty("theta"))
                object.theta = message.theta;
            if (message.phi != null && message.hasOwnProperty("phi"))
                object.phi = message.phi;
            return object;
        };

        /**
         * Converts this Orientation to JSON.
         * @function toJSON
         * @memberof dis.Orientation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Orientation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Orientation
         * @function getTypeUrl
         * @memberof dis.Orientation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Orientation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dis.Orientation";
        };

        return Orientation;
    })();

    dis.DeadReckoningParameter = (function() {

        /**
         * Properties of a DeadReckoningParameter.
         * @memberof dis
         * @interface IDeadReckoningParameter
         * @property {number|null} [algorithm] DeadReckoningParameter algorithm
         * @property {Uint8Array|null} [otherParameters] DeadReckoningParameter otherParameters
         * @property {dis.IVector3Int|null} [linearAcceleration] DeadReckoningParameter linearAcceleration
         * @property {dis.IVector3Int|null} [angularVelocity] DeadReckoningParameter angularVelocity
         */

        /**
         * Constructs a new DeadReckoningParameter.
         * @memberof dis
         * @classdesc Represents a DeadReckoningParameter.
         * @implements IDeadReckoningParameter
         * @constructor
         * @param {dis.IDeadReckoningParameter=} [properties] Properties to set
         */
        function DeadReckoningParameter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeadReckoningParameter algorithm.
         * @member {number} algorithm
         * @memberof dis.DeadReckoningParameter
         * @instance
         */
        DeadReckoningParameter.prototype.algorithm = 0;

        /**
         * DeadReckoningParameter otherParameters.
         * @member {Uint8Array} otherParameters
         * @memberof dis.DeadReckoningParameter
         * @instance
         */
        DeadReckoningParameter.prototype.otherParameters = $util.newBuffer([]);

        /**
         * DeadReckoningParameter linearAcceleration.
         * @member {dis.IVector3Int|null|undefined} linearAcceleration
         * @memberof dis.DeadReckoningParameter
         * @instance
         */
        DeadReckoningParameter.prototype.linearAcceleration = null;

        /**
         * DeadReckoningParameter angularVelocity.
         * @member {dis.IVector3Int|null|undefined} angularVelocity
         * @memberof dis.DeadReckoningParameter
         * @instance
         */
        DeadReckoningParameter.prototype.angularVelocity = null;

        /**
         * Creates a new DeadReckoningParameter instance using the specified properties.
         * @function create
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {dis.IDeadReckoningParameter=} [properties] Properties to set
         * @returns {dis.DeadReckoningParameter} DeadReckoningParameter instance
         */
        DeadReckoningParameter.create = function create(properties) {
            return new DeadReckoningParameter(properties);
        };

        /**
         * Encodes the specified DeadReckoningParameter message. Does not implicitly {@link dis.DeadReckoningParameter.verify|verify} messages.
         * @function encode
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {dis.IDeadReckoningParameter} message DeadReckoningParameter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeadReckoningParameter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.algorithm != null && Object.hasOwnProperty.call(message, "algorithm"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.algorithm);
            if (message.otherParameters != null && Object.hasOwnProperty.call(message, "otherParameters"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.otherParameters);
            if (message.linearAcceleration != null && Object.hasOwnProperty.call(message, "linearAcceleration"))
                $root.dis.Vector3Int.encode(message.linearAcceleration, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.angularVelocity != null && Object.hasOwnProperty.call(message, "angularVelocity"))
                $root.dis.Vector3Int.encode(message.angularVelocity, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeadReckoningParameter message, length delimited. Does not implicitly {@link dis.DeadReckoningParameter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {dis.IDeadReckoningParameter} message DeadReckoningParameter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeadReckoningParameter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeadReckoningParameter message from the specified reader or buffer.
         * @function decode
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dis.DeadReckoningParameter} DeadReckoningParameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeadReckoningParameter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dis.DeadReckoningParameter();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.algorithm = reader.uint32();
                        break;
                    }
                case 2: {
                        message.otherParameters = reader.bytes();
                        break;
                    }
                case 3: {
                        message.linearAcceleration = $root.dis.Vector3Int.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.angularVelocity = $root.dis.Vector3Int.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeadReckoningParameter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dis.DeadReckoningParameter} DeadReckoningParameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeadReckoningParameter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeadReckoningParameter message.
         * @function verify
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeadReckoningParameter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                if (!$util.isInteger(message.algorithm))
                    return "algorithm: integer expected";
            if (message.otherParameters != null && message.hasOwnProperty("otherParameters"))
                if (!(message.otherParameters && typeof message.otherParameters.length === "number" || $util.isString(message.otherParameters)))
                    return "otherParameters: buffer expected";
            if (message.linearAcceleration != null && message.hasOwnProperty("linearAcceleration")) {
                let error = $root.dis.Vector3Int.verify(message.linearAcceleration);
                if (error)
                    return "linearAcceleration." + error;
            }
            if (message.angularVelocity != null && message.hasOwnProperty("angularVelocity")) {
                let error = $root.dis.Vector3Int.verify(message.angularVelocity);
                if (error)
                    return "angularVelocity." + error;
            }
            return null;
        };

        /**
         * Creates a DeadReckoningParameter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dis.DeadReckoningParameter} DeadReckoningParameter
         */
        DeadReckoningParameter.fromObject = function fromObject(object) {
            if (object instanceof $root.dis.DeadReckoningParameter)
                return object;
            let message = new $root.dis.DeadReckoningParameter();
            if (object.algorithm != null)
                message.algorithm = object.algorithm >>> 0;
            if (object.otherParameters != null)
                if (typeof object.otherParameters === "string")
                    $util.base64.decode(object.otherParameters, message.otherParameters = $util.newBuffer($util.base64.length(object.otherParameters)), 0);
                else if (object.otherParameters.length >= 0)
                    message.otherParameters = object.otherParameters;
            if (object.linearAcceleration != null) {
                if (typeof object.linearAcceleration !== "object")
                    throw TypeError(".dis.DeadReckoningParameter.linearAcceleration: object expected");
                message.linearAcceleration = $root.dis.Vector3Int.fromObject(object.linearAcceleration);
            }
            if (object.angularVelocity != null) {
                if (typeof object.angularVelocity !== "object")
                    throw TypeError(".dis.DeadReckoningParameter.angularVelocity: object expected");
                message.angularVelocity = $root.dis.Vector3Int.fromObject(object.angularVelocity);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeadReckoningParameter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {dis.DeadReckoningParameter} message DeadReckoningParameter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeadReckoningParameter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.algorithm = 0;
                if (options.bytes === String)
                    object.otherParameters = "";
                else {
                    object.otherParameters = [];
                    if (options.bytes !== Array)
                        object.otherParameters = $util.newBuffer(object.otherParameters);
                }
                object.linearAcceleration = null;
                object.angularVelocity = null;
            }
            if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                object.algorithm = message.algorithm;
            if (message.otherParameters != null && message.hasOwnProperty("otherParameters"))
                object.otherParameters = options.bytes === String ? $util.base64.encode(message.otherParameters, 0, message.otherParameters.length) : options.bytes === Array ? Array.prototype.slice.call(message.otherParameters) : message.otherParameters;
            if (message.linearAcceleration != null && message.hasOwnProperty("linearAcceleration"))
                object.linearAcceleration = $root.dis.Vector3Int.toObject(message.linearAcceleration, options);
            if (message.angularVelocity != null && message.hasOwnProperty("angularVelocity"))
                object.angularVelocity = $root.dis.Vector3Int.toObject(message.angularVelocity, options);
            return object;
        };

        /**
         * Converts this DeadReckoningParameter to JSON.
         * @function toJSON
         * @memberof dis.DeadReckoningParameter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeadReckoningParameter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeadReckoningParameter
         * @function getTypeUrl
         * @memberof dis.DeadReckoningParameter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeadReckoningParameter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dis.DeadReckoningParameter";
        };

        return DeadReckoningParameter;
    })();

    dis.Marking = (function() {

        /**
         * Properties of a Marking.
         * @memberof dis
         * @interface IMarking
         * @property {dis.CharacterSet|null} [characterSet] Marking characterSet
         * @property {Uint8Array|null} [characters] Marking characters
         */

        /**
         * Constructs a new Marking.
         * @memberof dis
         * @classdesc Represents a Marking.
         * @implements IMarking
         * @constructor
         * @param {dis.IMarking=} [properties] Properties to set
         */
        function Marking(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Marking characterSet.
         * @member {dis.CharacterSet} characterSet
         * @memberof dis.Marking
         * @instance
         */
        Marking.prototype.characterSet = 0;

        /**
         * Marking characters.
         * @member {Uint8Array} characters
         * @memberof dis.Marking
         * @instance
         */
        Marking.prototype.characters = $util.newBuffer([]);

        /**
         * Creates a new Marking instance using the specified properties.
         * @function create
         * @memberof dis.Marking
         * @static
         * @param {dis.IMarking=} [properties] Properties to set
         * @returns {dis.Marking} Marking instance
         */
        Marking.create = function create(properties) {
            return new Marking(properties);
        };

        /**
         * Encodes the specified Marking message. Does not implicitly {@link dis.Marking.verify|verify} messages.
         * @function encode
         * @memberof dis.Marking
         * @static
         * @param {dis.IMarking} message Marking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Marking.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.characterSet != null && Object.hasOwnProperty.call(message, "characterSet"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.characterSet);
            if (message.characters != null && Object.hasOwnProperty.call(message, "characters"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.characters);
            return writer;
        };

        /**
         * Encodes the specified Marking message, length delimited. Does not implicitly {@link dis.Marking.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dis.Marking
         * @static
         * @param {dis.IMarking} message Marking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Marking.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Marking message from the specified reader or buffer.
         * @function decode
         * @memberof dis.Marking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dis.Marking} Marking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Marking.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dis.Marking();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.characterSet = reader.int32();
                        break;
                    }
                case 2: {
                        message.characters = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Marking message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dis.Marking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dis.Marking} Marking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Marking.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Marking message.
         * @function verify
         * @memberof dis.Marking
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Marking.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.characterSet != null && message.hasOwnProperty("characterSet"))
                switch (message.characterSet) {
                default:
                    return "characterSet: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.characters != null && message.hasOwnProperty("characters"))
                if (!(message.characters && typeof message.characters.length === "number" || $util.isString(message.characters)))
                    return "characters: buffer expected";
            return null;
        };

        /**
         * Creates a Marking message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dis.Marking
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dis.Marking} Marking
         */
        Marking.fromObject = function fromObject(object) {
            if (object instanceof $root.dis.Marking)
                return object;
            let message = new $root.dis.Marking();
            switch (object.characterSet) {
            default:
                if (typeof object.characterSet === "number") {
                    message.characterSet = object.characterSet;
                    break;
                }
                break;
            case "UNUSED":
            case 0:
                message.characterSet = 0;
                break;
            case "ASCII":
            case 1:
                message.characterSet = 1;
                break;
            }
            if (object.characters != null)
                if (typeof object.characters === "string")
                    $util.base64.decode(object.characters, message.characters = $util.newBuffer($util.base64.length(object.characters)), 0);
                else if (object.characters.length >= 0)
                    message.characters = object.characters;
            return message;
        };

        /**
         * Creates a plain object from a Marking message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dis.Marking
         * @static
         * @param {dis.Marking} message Marking
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Marking.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.characterSet = options.enums === String ? "UNUSED" : 0;
                if (options.bytes === String)
                    object.characters = "";
                else {
                    object.characters = [];
                    if (options.bytes !== Array)
                        object.characters = $util.newBuffer(object.characters);
                }
            }
            if (message.characterSet != null && message.hasOwnProperty("characterSet"))
                object.characterSet = options.enums === String ? $root.dis.CharacterSet[message.characterSet] === undefined ? message.characterSet : $root.dis.CharacterSet[message.characterSet] : message.characterSet;
            if (message.characters != null && message.hasOwnProperty("characters"))
                object.characters = options.bytes === String ? $util.base64.encode(message.characters, 0, message.characters.length) : options.bytes === Array ? Array.prototype.slice.call(message.characters) : message.characters;
            return object;
        };

        /**
         * Converts this Marking to JSON.
         * @function toJSON
         * @memberof dis.Marking
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Marking.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Marking
         * @function getTypeUrl
         * @memberof dis.Marking
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Marking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dis.Marking";
        };

        return Marking;
    })();

    dis.EntityStatePdu = (function() {

        /**
         * Properties of an EntityStatePdu.
         * @memberof dis
         * @interface IEntityStatePdu
         * @property {dis.ProtocolVersion|null} [protocolVersion] EntityStatePdu protocolVersion
         * @property {number|null} [exerciseID] EntityStatePdu exerciseID
         * @property {dis.PduType|null} [pduType] EntityStatePdu pduType
         * @property {dis.ProtocolFamily|null} [protocolFamily] EntityStatePdu protocolFamily
         * @property {number|null} [timestamp] EntityStatePdu timestamp
         * @property {number|null} [pduLength] EntityStatePdu pduLength
         * @property {number|null} [padding] EntityStatePdu padding
         * @property {dis.IEntityID|null} [entityID] EntityStatePdu entityID
         * @property {dis.ForceId|null} [forceId] EntityStatePdu forceId
         * @property {number|null} [numberOfArticulationParameters] EntityStatePdu numberOfArticulationParameters
         * @property {dis.IEntityType|null} [entityType] EntityStatePdu entityType
         * @property {dis.IEntityType|null} [alternativeEntityType] EntityStatePdu alternativeEntityType
         * @property {dis.IVector3Int|null} [entityLinearVelocity] EntityStatePdu entityLinearVelocity
         * @property {dis.IVector3Int|null} [entityLocation] EntityStatePdu entityLocation
         * @property {dis.IOrientation|null} [entityOrientation] EntityStatePdu entityOrientation
         * @property {number|null} [entityAppearance] EntityStatePdu entityAppearance
         * @property {dis.IDeadReckoningParameter|null} [deadReckoningParameters] EntityStatePdu deadReckoningParameters
         * @property {dis.IMarking|null} [marking] EntityStatePdu marking
         * @property {number|null} [capabilities] EntityStatePdu capabilities
         * @property {Array.<Uint8Array>|null} [articulationParameters] EntityStatePdu articulationParameters
         */

        /**
         * Constructs a new EntityStatePdu.
         * @memberof dis
         * @classdesc Represents an EntityStatePdu.
         * @implements IEntityStatePdu
         * @constructor
         * @param {dis.IEntityStatePdu=} [properties] Properties to set
         */
        function EntityStatePdu(properties) {
            this.articulationParameters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityStatePdu protocolVersion.
         * @member {dis.ProtocolVersion} protocolVersion
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.protocolVersion = 0;

        /**
         * EntityStatePdu exerciseID.
         * @member {number} exerciseID
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.exerciseID = 0;

        /**
         * EntityStatePdu pduType.
         * @member {dis.PduType} pduType
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.pduType = 0;

        /**
         * EntityStatePdu protocolFamily.
         * @member {dis.ProtocolFamily} protocolFamily
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.protocolFamily = 0;

        /**
         * EntityStatePdu timestamp.
         * @member {number} timestamp
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.timestamp = 0;

        /**
         * EntityStatePdu pduLength.
         * @member {number} pduLength
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.pduLength = 0;

        /**
         * EntityStatePdu padding.
         * @member {number} padding
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.padding = 0;

        /**
         * EntityStatePdu entityID.
         * @member {dis.IEntityID|null|undefined} entityID
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.entityID = null;

        /**
         * EntityStatePdu forceId.
         * @member {dis.ForceId} forceId
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.forceId = 0;

        /**
         * EntityStatePdu numberOfArticulationParameters.
         * @member {number} numberOfArticulationParameters
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.numberOfArticulationParameters = 0;

        /**
         * EntityStatePdu entityType.
         * @member {dis.IEntityType|null|undefined} entityType
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.entityType = null;

        /**
         * EntityStatePdu alternativeEntityType.
         * @member {dis.IEntityType|null|undefined} alternativeEntityType
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.alternativeEntityType = null;

        /**
         * EntityStatePdu entityLinearVelocity.
         * @member {dis.IVector3Int|null|undefined} entityLinearVelocity
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.entityLinearVelocity = null;

        /**
         * EntityStatePdu entityLocation.
         * @member {dis.IVector3Int|null|undefined} entityLocation
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.entityLocation = null;

        /**
         * EntityStatePdu entityOrientation.
         * @member {dis.IOrientation|null|undefined} entityOrientation
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.entityOrientation = null;

        /**
         * EntityStatePdu entityAppearance.
         * @member {number} entityAppearance
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.entityAppearance = 0;

        /**
         * EntityStatePdu deadReckoningParameters.
         * @member {dis.IDeadReckoningParameter|null|undefined} deadReckoningParameters
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.deadReckoningParameters = null;

        /**
         * EntityStatePdu marking.
         * @member {dis.IMarking|null|undefined} marking
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.marking = null;

        /**
         * EntityStatePdu capabilities.
         * @member {number} capabilities
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.capabilities = 0;

        /**
         * EntityStatePdu articulationParameters.
         * @member {Array.<Uint8Array>} articulationParameters
         * @memberof dis.EntityStatePdu
         * @instance
         */
        EntityStatePdu.prototype.articulationParameters = $util.emptyArray;

        /**
         * Creates a new EntityStatePdu instance using the specified properties.
         * @function create
         * @memberof dis.EntityStatePdu
         * @static
         * @param {dis.IEntityStatePdu=} [properties] Properties to set
         * @returns {dis.EntityStatePdu} EntityStatePdu instance
         */
        EntityStatePdu.create = function create(properties) {
            return new EntityStatePdu(properties);
        };

        /**
         * Encodes the specified EntityStatePdu message. Does not implicitly {@link dis.EntityStatePdu.verify|verify} messages.
         * @function encode
         * @memberof dis.EntityStatePdu
         * @static
         * @param {dis.IEntityStatePdu} message EntityStatePdu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityStatePdu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.protocolVersion);
            if (message.exerciseID != null && Object.hasOwnProperty.call(message, "exerciseID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.exerciseID);
            if (message.pduType != null && Object.hasOwnProperty.call(message, "pduType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pduType);
            if (message.protocolFamily != null && Object.hasOwnProperty.call(message, "protocolFamily"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.protocolFamily);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.timestamp);
            if (message.pduLength != null && Object.hasOwnProperty.call(message, "pduLength"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.pduLength);
            if (message.padding != null && Object.hasOwnProperty.call(message, "padding"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.padding);
            if (message.entityID != null && Object.hasOwnProperty.call(message, "entityID"))
                $root.dis.EntityID.encode(message.entityID, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.forceId != null && Object.hasOwnProperty.call(message, "forceId"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.forceId);
            if (message.numberOfArticulationParameters != null && Object.hasOwnProperty.call(message, "numberOfArticulationParameters"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.numberOfArticulationParameters);
            if (message.entityType != null && Object.hasOwnProperty.call(message, "entityType"))
                $root.dis.EntityType.encode(message.entityType, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.alternativeEntityType != null && Object.hasOwnProperty.call(message, "alternativeEntityType"))
                $root.dis.EntityType.encode(message.alternativeEntityType, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.entityLinearVelocity != null && Object.hasOwnProperty.call(message, "entityLinearVelocity"))
                $root.dis.Vector3Int.encode(message.entityLinearVelocity, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.entityLocation != null && Object.hasOwnProperty.call(message, "entityLocation"))
                $root.dis.Vector3Int.encode(message.entityLocation, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.entityOrientation != null && Object.hasOwnProperty.call(message, "entityOrientation"))
                $root.dis.Orientation.encode(message.entityOrientation, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.entityAppearance != null && Object.hasOwnProperty.call(message, "entityAppearance"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.entityAppearance);
            if (message.deadReckoningParameters != null && Object.hasOwnProperty.call(message, "deadReckoningParameters"))
                $root.dis.DeadReckoningParameter.encode(message.deadReckoningParameters, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.marking != null && Object.hasOwnProperty.call(message, "marking"))
                $root.dis.Marking.encode(message.marking, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.capabilities != null && Object.hasOwnProperty.call(message, "capabilities"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.capabilities);
            if (message.articulationParameters != null && message.articulationParameters.length)
                for (let i = 0; i < message.articulationParameters.length; ++i)
                    writer.uint32(/* id 20, wireType 2 =*/162).bytes(message.articulationParameters[i]);
            return writer;
        };

        /**
         * Encodes the specified EntityStatePdu message, length delimited. Does not implicitly {@link dis.EntityStatePdu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dis.EntityStatePdu
         * @static
         * @param {dis.IEntityStatePdu} message EntityStatePdu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityStatePdu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityStatePdu message from the specified reader or buffer.
         * @function decode
         * @memberof dis.EntityStatePdu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dis.EntityStatePdu} EntityStatePdu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityStatePdu.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dis.EntityStatePdu();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.protocolVersion = reader.int32();
                        break;
                    }
                case 2: {
                        message.exerciseID = reader.uint32();
                        break;
                    }
                case 3: {
                        message.pduType = reader.int32();
                        break;
                    }
                case 4: {
                        message.protocolFamily = reader.int32();
                        break;
                    }
                case 5: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 6: {
                        message.pduLength = reader.uint32();
                        break;
                    }
                case 7: {
                        message.padding = reader.uint32();
                        break;
                    }
                case 8: {
                        message.entityID = $root.dis.EntityID.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.forceId = reader.int32();
                        break;
                    }
                case 10: {
                        message.numberOfArticulationParameters = reader.uint32();
                        break;
                    }
                case 11: {
                        message.entityType = $root.dis.EntityType.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.alternativeEntityType = $root.dis.EntityType.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.entityLinearVelocity = $root.dis.Vector3Int.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.entityLocation = $root.dis.Vector3Int.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.entityOrientation = $root.dis.Orientation.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.entityAppearance = reader.uint32();
                        break;
                    }
                case 17: {
                        message.deadReckoningParameters = $root.dis.DeadReckoningParameter.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.marking = $root.dis.Marking.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.capabilities = reader.uint32();
                        break;
                    }
                case 20: {
                        if (!(message.articulationParameters && message.articulationParameters.length))
                            message.articulationParameters = [];
                        message.articulationParameters.push(reader.bytes());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntityStatePdu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dis.EntityStatePdu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dis.EntityStatePdu} EntityStatePdu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityStatePdu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityStatePdu message.
         * @function verify
         * @memberof dis.EntityStatePdu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityStatePdu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                switch (message.protocolVersion) {
                default:
                    return "protocolVersion: enum value expected";
                case 0:
                case 5:
                    break;
                }
            if (message.exerciseID != null && message.hasOwnProperty("exerciseID"))
                if (!$util.isInteger(message.exerciseID))
                    return "exerciseID: integer expected";
            if (message.pduType != null && message.hasOwnProperty("pduType"))
                switch (message.pduType) {
                default:
                    return "pduType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.protocolFamily != null && message.hasOwnProperty("protocolFamily"))
                switch (message.protocolFamily) {
                default:
                    return "protocolFamily: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.pduLength != null && message.hasOwnProperty("pduLength"))
                if (!$util.isInteger(message.pduLength))
                    return "pduLength: integer expected";
            if (message.padding != null && message.hasOwnProperty("padding"))
                if (!$util.isInteger(message.padding))
                    return "padding: integer expected";
            if (message.entityID != null && message.hasOwnProperty("entityID")) {
                let error = $root.dis.EntityID.verify(message.entityID);
                if (error)
                    return "entityID." + error;
            }
            if (message.forceId != null && message.hasOwnProperty("forceId"))
                switch (message.forceId) {
                default:
                    return "forceId: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.numberOfArticulationParameters != null && message.hasOwnProperty("numberOfArticulationParameters"))
                if (!$util.isInteger(message.numberOfArticulationParameters))
                    return "numberOfArticulationParameters: integer expected";
            if (message.entityType != null && message.hasOwnProperty("entityType")) {
                let error = $root.dis.EntityType.verify(message.entityType);
                if (error)
                    return "entityType." + error;
            }
            if (message.alternativeEntityType != null && message.hasOwnProperty("alternativeEntityType")) {
                let error = $root.dis.EntityType.verify(message.alternativeEntityType);
                if (error)
                    return "alternativeEntityType." + error;
            }
            if (message.entityLinearVelocity != null && message.hasOwnProperty("entityLinearVelocity")) {
                let error = $root.dis.Vector3Int.verify(message.entityLinearVelocity);
                if (error)
                    return "entityLinearVelocity." + error;
            }
            if (message.entityLocation != null && message.hasOwnProperty("entityLocation")) {
                let error = $root.dis.Vector3Int.verify(message.entityLocation);
                if (error)
                    return "entityLocation." + error;
            }
            if (message.entityOrientation != null && message.hasOwnProperty("entityOrientation")) {
                let error = $root.dis.Orientation.verify(message.entityOrientation);
                if (error)
                    return "entityOrientation." + error;
            }
            if (message.entityAppearance != null && message.hasOwnProperty("entityAppearance"))
                if (!$util.isInteger(message.entityAppearance))
                    return "entityAppearance: integer expected";
            if (message.deadReckoningParameters != null && message.hasOwnProperty("deadReckoningParameters")) {
                let error = $root.dis.DeadReckoningParameter.verify(message.deadReckoningParameters);
                if (error)
                    return "deadReckoningParameters." + error;
            }
            if (message.marking != null && message.hasOwnProperty("marking")) {
                let error = $root.dis.Marking.verify(message.marking);
                if (error)
                    return "marking." + error;
            }
            if (message.capabilities != null && message.hasOwnProperty("capabilities"))
                if (!$util.isInteger(message.capabilities))
                    return "capabilities: integer expected";
            if (message.articulationParameters != null && message.hasOwnProperty("articulationParameters")) {
                if (!Array.isArray(message.articulationParameters))
                    return "articulationParameters: array expected";
                for (let i = 0; i < message.articulationParameters.length; ++i)
                    if (!(message.articulationParameters[i] && typeof message.articulationParameters[i].length === "number" || $util.isString(message.articulationParameters[i])))
                        return "articulationParameters: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an EntityStatePdu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dis.EntityStatePdu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dis.EntityStatePdu} EntityStatePdu
         */
        EntityStatePdu.fromObject = function fromObject(object) {
            if (object instanceof $root.dis.EntityStatePdu)
                return object;
            let message = new $root.dis.EntityStatePdu();
            switch (object.protocolVersion) {
            default:
                if (typeof object.protocolVersion === "number") {
                    message.protocolVersion = object.protocolVersion;
                    break;
                }
                break;
            case "PROTOCOL_VERSION_OTHER":
            case 0:
                message.protocolVersion = 0;
                break;
            case "IEEE_1278_1_1995":
            case 5:
                message.protocolVersion = 5;
                break;
            }
            if (object.exerciseID != null)
                message.exerciseID = object.exerciseID >>> 0;
            switch (object.pduType) {
            default:
                if (typeof object.pduType === "number") {
                    message.pduType = object.pduType;
                    break;
                }
                break;
            case "PDU_TYPE_OTHER":
            case 0:
                message.pduType = 0;
                break;
            case "ENTITY_STATE":
            case 1:
                message.pduType = 1;
                break;
            case "FIRE":
            case 2:
                message.pduType = 2;
                break;
            case "DETONATION":
            case 3:
                message.pduType = 3;
                break;
            case "COLLISION":
            case 4:
                message.pduType = 4;
                break;
            }
            switch (object.protocolFamily) {
            default:
                if (typeof object.protocolFamily === "number") {
                    message.protocolFamily = object.protocolFamily;
                    break;
                }
                break;
            case "PROTOCOL_FAMILY_OTHER":
            case 0:
                message.protocolFamily = 0;
                break;
            case "ENTITY_INFORMATION":
            case 1:
                message.protocolFamily = 1;
                break;
            }
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.pduLength != null)
                message.pduLength = object.pduLength >>> 0;
            if (object.padding != null)
                message.padding = object.padding >>> 0;
            if (object.entityID != null) {
                if (typeof object.entityID !== "object")
                    throw TypeError(".dis.EntityStatePdu.entityID: object expected");
                message.entityID = $root.dis.EntityID.fromObject(object.entityID);
            }
            switch (object.forceId) {
            default:
                if (typeof object.forceId === "number") {
                    message.forceId = object.forceId;
                    break;
                }
                break;
            case "FORCE_ID_OTHER":
            case 0:
                message.forceId = 0;
                break;
            case "FRIENDLY":
            case 1:
                message.forceId = 1;
                break;
            case "OPPOSING":
            case 2:
                message.forceId = 2;
                break;
            }
            if (object.numberOfArticulationParameters != null)
                message.numberOfArticulationParameters = object.numberOfArticulationParameters >>> 0;
            if (object.entityType != null) {
                if (typeof object.entityType !== "object")
                    throw TypeError(".dis.EntityStatePdu.entityType: object expected");
                message.entityType = $root.dis.EntityType.fromObject(object.entityType);
            }
            if (object.alternativeEntityType != null) {
                if (typeof object.alternativeEntityType !== "object")
                    throw TypeError(".dis.EntityStatePdu.alternativeEntityType: object expected");
                message.alternativeEntityType = $root.dis.EntityType.fromObject(object.alternativeEntityType);
            }
            if (object.entityLinearVelocity != null) {
                if (typeof object.entityLinearVelocity !== "object")
                    throw TypeError(".dis.EntityStatePdu.entityLinearVelocity: object expected");
                message.entityLinearVelocity = $root.dis.Vector3Int.fromObject(object.entityLinearVelocity);
            }
            if (object.entityLocation != null) {
                if (typeof object.entityLocation !== "object")
                    throw TypeError(".dis.EntityStatePdu.entityLocation: object expected");
                message.entityLocation = $root.dis.Vector3Int.fromObject(object.entityLocation);
            }
            if (object.entityOrientation != null) {
                if (typeof object.entityOrientation !== "object")
                    throw TypeError(".dis.EntityStatePdu.entityOrientation: object expected");
                message.entityOrientation = $root.dis.Orientation.fromObject(object.entityOrientation);
            }
            if (object.entityAppearance != null)
                message.entityAppearance = object.entityAppearance >>> 0;
            if (object.deadReckoningParameters != null) {
                if (typeof object.deadReckoningParameters !== "object")
                    throw TypeError(".dis.EntityStatePdu.deadReckoningParameters: object expected");
                message.deadReckoningParameters = $root.dis.DeadReckoningParameter.fromObject(object.deadReckoningParameters);
            }
            if (object.marking != null) {
                if (typeof object.marking !== "object")
                    throw TypeError(".dis.EntityStatePdu.marking: object expected");
                message.marking = $root.dis.Marking.fromObject(object.marking);
            }
            if (object.capabilities != null)
                message.capabilities = object.capabilities >>> 0;
            if (object.articulationParameters) {
                if (!Array.isArray(object.articulationParameters))
                    throw TypeError(".dis.EntityStatePdu.articulationParameters: array expected");
                message.articulationParameters = [];
                for (let i = 0; i < object.articulationParameters.length; ++i)
                    if (typeof object.articulationParameters[i] === "string")
                        $util.base64.decode(object.articulationParameters[i], message.articulationParameters[i] = $util.newBuffer($util.base64.length(object.articulationParameters[i])), 0);
                    else if (object.articulationParameters[i].length >= 0)
                        message.articulationParameters[i] = object.articulationParameters[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an EntityStatePdu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dis.EntityStatePdu
         * @static
         * @param {dis.EntityStatePdu} message EntityStatePdu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityStatePdu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.articulationParameters = [];
            if (options.defaults) {
                object.protocolVersion = options.enums === String ? "PROTOCOL_VERSION_OTHER" : 0;
                object.exerciseID = 0;
                object.pduType = options.enums === String ? "PDU_TYPE_OTHER" : 0;
                object.protocolFamily = options.enums === String ? "PROTOCOL_FAMILY_OTHER" : 0;
                object.timestamp = 0;
                object.pduLength = 0;
                object.padding = 0;
                object.entityID = null;
                object.forceId = options.enums === String ? "FORCE_ID_OTHER" : 0;
                object.numberOfArticulationParameters = 0;
                object.entityType = null;
                object.alternativeEntityType = null;
                object.entityLinearVelocity = null;
                object.entityLocation = null;
                object.entityOrientation = null;
                object.entityAppearance = 0;
                object.deadReckoningParameters = null;
                object.marking = null;
                object.capabilities = 0;
            }
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                object.protocolVersion = options.enums === String ? $root.dis.ProtocolVersion[message.protocolVersion] === undefined ? message.protocolVersion : $root.dis.ProtocolVersion[message.protocolVersion] : message.protocolVersion;
            if (message.exerciseID != null && message.hasOwnProperty("exerciseID"))
                object.exerciseID = message.exerciseID;
            if (message.pduType != null && message.hasOwnProperty("pduType"))
                object.pduType = options.enums === String ? $root.dis.PduType[message.pduType] === undefined ? message.pduType : $root.dis.PduType[message.pduType] : message.pduType;
            if (message.protocolFamily != null && message.hasOwnProperty("protocolFamily"))
                object.protocolFamily = options.enums === String ? $root.dis.ProtocolFamily[message.protocolFamily] === undefined ? message.protocolFamily : $root.dis.ProtocolFamily[message.protocolFamily] : message.protocolFamily;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.pduLength != null && message.hasOwnProperty("pduLength"))
                object.pduLength = message.pduLength;
            if (message.padding != null && message.hasOwnProperty("padding"))
                object.padding = message.padding;
            if (message.entityID != null && message.hasOwnProperty("entityID"))
                object.entityID = $root.dis.EntityID.toObject(message.entityID, options);
            if (message.forceId != null && message.hasOwnProperty("forceId"))
                object.forceId = options.enums === String ? $root.dis.ForceId[message.forceId] === undefined ? message.forceId : $root.dis.ForceId[message.forceId] : message.forceId;
            if (message.numberOfArticulationParameters != null && message.hasOwnProperty("numberOfArticulationParameters"))
                object.numberOfArticulationParameters = message.numberOfArticulationParameters;
            if (message.entityType != null && message.hasOwnProperty("entityType"))
                object.entityType = $root.dis.EntityType.toObject(message.entityType, options);
            if (message.alternativeEntityType != null && message.hasOwnProperty("alternativeEntityType"))
                object.alternativeEntityType = $root.dis.EntityType.toObject(message.alternativeEntityType, options);
            if (message.entityLinearVelocity != null && message.hasOwnProperty("entityLinearVelocity"))
                object.entityLinearVelocity = $root.dis.Vector3Int.toObject(message.entityLinearVelocity, options);
            if (message.entityLocation != null && message.hasOwnProperty("entityLocation"))
                object.entityLocation = $root.dis.Vector3Int.toObject(message.entityLocation, options);
            if (message.entityOrientation != null && message.hasOwnProperty("entityOrientation"))
                object.entityOrientation = $root.dis.Orientation.toObject(message.entityOrientation, options);
            if (message.entityAppearance != null && message.hasOwnProperty("entityAppearance"))
                object.entityAppearance = message.entityAppearance;
            if (message.deadReckoningParameters != null && message.hasOwnProperty("deadReckoningParameters"))
                object.deadReckoningParameters = $root.dis.DeadReckoningParameter.toObject(message.deadReckoningParameters, options);
            if (message.marking != null && message.hasOwnProperty("marking"))
                object.marking = $root.dis.Marking.toObject(message.marking, options);
            if (message.capabilities != null && message.hasOwnProperty("capabilities"))
                object.capabilities = message.capabilities;
            if (message.articulationParameters && message.articulationParameters.length) {
                object.articulationParameters = [];
                for (let j = 0; j < message.articulationParameters.length; ++j)
                    object.articulationParameters[j] = options.bytes === String ? $util.base64.encode(message.articulationParameters[j], 0, message.articulationParameters[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.articulationParameters[j]) : message.articulationParameters[j];
            }
            return object;
        };

        /**
         * Converts this EntityStatePdu to JSON.
         * @function toJSON
         * @memberof dis.EntityStatePdu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityStatePdu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityStatePdu
         * @function getTypeUrl
         * @memberof dis.EntityStatePdu
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityStatePdu.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dis.EntityStatePdu";
        };

        return EntityStatePdu;
    })();

    return dis;
})();

export { $root as default };
