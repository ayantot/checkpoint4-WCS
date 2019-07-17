package com.wild.circus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wild.circus.entities.User;


@Repository
public interface UserDAO extends JpaRepository<User, Long> {

    public User findByEmailAndPassword( String p_email, String p_password);
    public User findByUsername( String username );

}
