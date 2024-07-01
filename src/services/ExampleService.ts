import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import Service from './Service';

class TeamPulseService extends Service {
    internalFetch = async <T>(
        path: string,
        args: RequestInit,
    ): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                let { isConnected } = await NetInfo.fetch();
                if (!isConnected) {
                    throw new Error('No Internet Connection Found !');
                }
                console.log(`==== ${args.method} || ${this.baseUrl}${path}`);
                const request = new Request(`${this.baseUrl}${path}`, args);
                const start = this.startMessure(request);
                const response: any = await fetch(request);
                this.endMessure(request, start);
                console.log(
                    `==== RESPONSE ==== ${response.status} :: ${response.parsedBody}`,
                );
                await this.errorhandler(response);
                response.parsedBody = await this.tryGetJson(response);
                resolve(response);
            } catch (err: any) {
                let _error = err;
                if (!(_error?.errors[0]?.messages == 'Topic not found')) {
                    Snackbar.show({
                        text:
                            err.message ||
                            'Something went wrong. Please contact support',
                        duration: Snackbar.LENGTH_SHORT,
                    });
                }

                reject(err);
            }
        });
    };

    
    getResponseBPI = async (): Promise<any> => {
        let url = `https://api.coindesk.com/v1/bpi/currentprice.json`;
    
        const response = await this.get<any>(url);
        const body = response.parsedBody!;
    
        return body;
    };
}