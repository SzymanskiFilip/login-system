package eu.filip.backend.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import eu.filip.backend.utils.LoginCredentials;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

public class JsonObjectAuthFilter extends UsernamePasswordAuthenticationFilter {

    private final ObjectMapper objectMapper;
    //TODO: DODAĆ BAZE DANCYCH

    public JsonObjectAuthFilter(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            BufferedReader reader = request.getReader();
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
            LoginCredentials authRequest = objectMapper.readValue(sb.toString(), LoginCredentials.class);
            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                    authRequest.getUsername(), authRequest.getPassword()
            );
            setDetails(request, token);

            response.addCookie(new Cookie("ROLE", "USER")); // HARDCODED USER ROLE, BASED ON JPA RESPONSE

            response.setHeader("Access-Control-Allow-Credentials", "true");

            return this.getAuthenticationManager().authenticate(token);
        } catch (IOException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }


}
