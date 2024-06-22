export const convertToCloudFrontUrl = (s3Url: string) => {
    if(s3Url){
      const s3BucketUrl = process.env.NEXT_PUBLIC_S3_BUCKET_URL;
      const cloudFrontUrl = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;
      
      if (!s3BucketUrl || !cloudFrontUrl) {
        throw new Error('S3 bucket URL or CloudFront URL not defined in environment variables');
      }
      
      // Replace S3 bucket URL with CloudFront distribution URL
      const convertedUrl = s3Url.replace(new RegExp(s3BucketUrl), cloudFrontUrl);
      
      return convertedUrl;
    }

  };