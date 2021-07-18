interface PrintSiteParams {
    url: string;
    path?: string;
    mobile?: boolean;
    defaultViewport?: {
        width: number;
        height: number;
    };
    fullPage?: boolean;
    captureBeyondViewport?: boolean;
}
/**
 * @param {PrintSiteParams} params
 * @param path path to save the image to, should have .png extension
 */
export declare function printSite({ url, path, defaultViewport, fullPage, captureBeyondViewport, mobile, }: PrintSiteParams): Promise<void>;
export {};
