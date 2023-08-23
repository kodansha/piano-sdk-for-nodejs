import { Piano } from '../piano';
import { httpRequest } from '../utils/http-request';
import {
    AccessCheckParams,
} from '../interfaces/api-params';
import {
    AccessCheckResponse,
} from '../interfaces/api-response';
import { AccessDTO } from '../interfaces/access-dto';

const ENDPOINT_PATH_PREFIX = "/access";

export class Access {
    private readonly piano: Piano;

    constructor(piano: Piano) {
        this.piano = piano;
    }

    public async check(params: AccessCheckParams): Promise<AccessDTO> {
        const requestParams = this.piano.mergeParams(params);
        const apiResponse = (await httpRequest(
            'post',
            `${ENDPOINT_PATH_PREFIX}/check`,
            requestParams,
            this.piano.environment,
            {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${requestParams.apiToken}`,
            }
        )) as AccessCheckResponse;

        return apiResponse.access;
    }
}