package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import conversion.CreateUniqueId;
import conversion.IDConverter;
import conversion.DictionaryKey;
import repo.URLRepo.URLRepository;

@Service
	public class URLConverterService {
	    //private static final Logger LOGGER = LoggerFactory.getLogger(URLConverterService.class);
	CreateUniqueId createUniqueId=new CreateUniqueId();
	DictionaryKey getdictionaryKey=new DictionaryKey();
	    private final URLRepository urlRepository;

	    @Autowired
	    public URLConverterService(URLRepository urlRepository) {
	        this.urlRepository = urlRepository;
	    }

	    public String shortenURL(String localURL, String longUrl) {
	       // LOGGER.info("Shortening {}", longUrl);
	        Long id = urlRepository.incrementID();
	        String uniqueID = createUniqueId.createUniqueID(id);
	        urlRepository.saveUrl("url:"+id, longUrl);
	        String baseString = formatLocalURLFromShortener(localURL);
	        String shortenedURL = baseString + uniqueID;
	        return shortenedURL;
	    }

	    public String getLongURLFromID(String uniqueID) throws Exception {
	        Long dictionaryKey = getdictionaryKey.getDictionaryKeyFromUniqueID(uniqueID);
	        String longUrl = urlRepository.getUrl(dictionaryKey);
	       // LOGGER.info("Converting shortened URL back to {}", longUrl);
	        return longUrl;
	    }

	    private String formatLocalURLFromShortener(String localURL) {
	        String[] addressComponents = localURL.split("/");
	        // remove the endpoint (last index)
	        StringBuilder sb = new StringBuilder();
	        for (int i = 0; i < addressComponents.length - 1; ++i) {
	            sb.append(addressComponents[i]);
	        }
	        sb.append('/');
	        return sb.toString();
	    }

}


